<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import { Send } from "lucide-svelte";
  let question = $state<string>();
  let response = $state<string>();
</script>

<Wrapper pageTitle="Ducky Chat">
  <p id="response">{response}</p>
  <form
    class="form"
    onsubmit={(event) => {
      // prettier-ignore
      setTimeout(() => { response = "Loading." }, 250);
      // prettier-ignore
      setTimeout(() => { response = "Loading.."; }, 500);
      // prettier-ignore
      setTimeout(() => { response = "Loading..."; }, 750);
      // prettier-ignore
      setTimeout(() => { response = "Loading.."; }, 1000);
      // prettier-ignore
      setTimeout(() => { response = "Loading."; }, 1250);
      // prettier-ignore
      setTimeout(() => { response = "Loading.."; }, 1500);
      // prettier-ignore
      setTimeout(() => { response = "Loading..."; }, 1750);
      if (question == "What do you do?") {
        // prettier-ignore
        setTimeout(() => { response = "I am a AI assistant that will help with digital literacy and cyber security! Quack!"; }, 2000);
      } else if (question == "Tell me more about how you can help.") {
        // prettier-ignore
        setTimeout(() => { response = "I can help by detecting AI images, I can fact check websites, and let you know if an email you got is phishing! Quack!"; }, 2000);
      }
      event.preventDefault();
    }}
  >
    <input id="textbox" class="textbox" type="text" bind:value={question} />
    <button class="submit" aria-label="Send" type="submit">
      <Send />
    </button>
  </form>

  <div class="open">
    <a class="chat-button" href="https://chatgpt.com">Open Chat in Browser</a>
  </div>
</Wrapper>

<style>
  .textbox {
    color: black;
    width: 70%;
    field-sizing: content;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    resize: none;

    border-radius: 1rem;
  }
  .submit {
    all: unset;
    outline: revert;
    background-color: #e2c100;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;
    border-radius: 0.5rem;

    transition:
      background-color 0.3s,
      transform 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #f0d500;
      transform: scale(1.075);
    }
  }
  .form {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;

    & > .chat-button {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
      transition:
        border-color 0.25s,
        background-color 0.3s,
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
