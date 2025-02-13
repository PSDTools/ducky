<script lang="ts">
  import { onMount } from "svelte";
  import RadioButton from "./RadioButton.svelte";
  import Wrapper from "./Wrapper.svelte";

  let currentTab = $state<chrome.tabs.Tab>();
  let form = $state<HTMLFormElement>();

  onMount(async () => {
    [currentTab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
  });
</script>

<Wrapper pageTitle="Fact Checker">
  <form bind:this={form} action="#fact-check-loading" method="get">
    <fieldset>
      <legend>What would you like to fact check?</legend>
      <div>
        <div class="option-wrapper">
          <div>
            <RadioButton id="current" name="answer" checked value="current" />
            <label class="option" for="current">Current Website</label>
          </div>
          <p class="radio-indent current-tab-text">
            {currentTab?.url ?? "Unknown Tab"}
          </p>
        </div>
        <div class="option-wrapper">
          <div>
            <RadioButton id="other" name="answer" value="other" />
            <label class="option" for="other">Other Website</label>
          </div>
          <div class="radio-indent other-input">
            <input name="url" placeholder="Enter website URL" type="text" />
          </div>
        </div>
      </div>
    </fieldset>
    <div class="card">
      <button data-name="fact-check-loading" data-router-link type="submit">
        Check Website
      </button>
    </div>
  </form>
</Wrapper>

<style>
  .radio-indent {
    margin-left: 40px;
  }

  .option {
    cursor: pointer;
    font-size: 16px;
  }

  .option-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .other-input input[type="text"] {
    background: transparent;
    border-radius: 1rem;
    width: calc(100% - 40px);
    border: 1px solid;
  }

  /* New styles for scaling current tab text without taking more than two lines */
  .current-tab-text {
    /* Font size scales between 14px and 18px based on the viewport width */
    font-size: clamp(14px, 2vw, 18px);
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 2;
    display: flex;
    flex-direction: column;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;

    & > button {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
      transition:
        border-color 0.25s,
        background 0.3s,
        transform 0.2s;

      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;

      &:hover {
        background-color: #f0d500;
        transform: scale(1.075);
      }
    }
  }
</style>
