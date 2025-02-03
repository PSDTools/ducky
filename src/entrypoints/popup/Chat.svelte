<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import { Send } from "lucide-svelte";

  var text = $state<string>();
</script>

<Wrapper pageTitle="Ducky Chat">
  <div class="response-container">
    <p>Ask me a question!</p>
  </div>
  <form
    class="form"
    onsubmit={() => {
      alert(text ?? "");
    }}
  >
    <input bind:value={text} type="text" class="textbox" id="textbox" />
    <button aria-label="Send" class="submit" type="submit">
      <Send />
    </button>
  </form>

  <div class="open">
    <a href="https://www.w3schools.com">Open Chat in Browser</a>
  </div>
</Wrapper>

<style>
  .response-container {
    height: 60%;
    color: #e2c100;
  }
  .textbox {
    color: black;
    display: inline;
    width: 70%;

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
    gap: 1rem;
  }
  .open {
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
