<script lang="ts">
  import { onMount } from "svelte";
  import RadioButton from "./RadioButton.svelte";
  import Wrapper from "./Wrapper.svelte";

  let currentTabText = "Loading...";

  onMount(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      currentTabText = currentTab.url || "Unknown Tab";
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
          <label for="current" class="option">Current Website</label>
        </div>
        <div class="other-input">
          <p>{currentTabText}</p>
        </div>
        <div>
          <div class="radio-other-container">
            <RadioButton id="other" name="answer" value="other" />
            <label for="other" class="option">Other Website</label>
          </div>
          <div class="other-input">
            <input type="text" placeholder="Enter website URL" />
          </div>
        </div>
      </div>
    </fieldset>
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
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
