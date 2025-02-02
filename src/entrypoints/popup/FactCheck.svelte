<script lang="ts">
  import { onMount } from "svelte";
  import RadioButton from "./RadioButton.svelte";
  import Wrapper from "./Wrapper.svelte";

  let currentTabText = "Loading...";

  onMount(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const [currentTab] = tabs;
      currentTabText = currentTab.url ?? "Unknown Tab";
    });
  });
</script>

<Wrapper pageTitle="Fact Checker">
  <form>
    <fieldset>
      <legend>What would you like to fact check?</legend>
      <div>
        <div>
          <RadioButton id="current" name="answer" value="current" />
          <label class="option" for="current">Current Website</label>
        </div>
        <div class="other-input">
          <p>{currentTabText}</p>
        </div>
        <div>
          <div class="radio-other-container">
            <RadioButton id="other" name="answer" value="other" />
            <label class="option" for="other">Other Website</label>
          </div>
          <div class="other-input">
            <input placeholder="Enter website URL" type="text" />
          </div>
        </div>
      </div>
    </fieldset>
    <div class="card">
      {#snippet button(name: string, route: string)}
        <a href={route}>{name}</a>
      {/snippet}
      {@render button("Submit", "#/fact-check-loading")}
    </div>
  </form>
</Wrapper>

<style>
  .option {
    cursor: pointer;
    font-size: 16px;
  }
  .radio-other-container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .other-input {
    margin-left: 24px;
  }
  .other-input input[type="text"] {
    background: transparent;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    padding: 4px 0;
    width: 100%;
  }

  /* New styles for scaling current tab text without taking more than two lines */
  .other-input p {
    /* Font size scales between 14px and 18px based on the viewport width */
    font-size: clamp(14px, 2vw, 18px);
    margin: 0;
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

    & > a {
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
