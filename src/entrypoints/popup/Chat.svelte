<script lang="ts">
  import Wrapper from "./Wrapper.svelte";

  var text = $state<string>();
</script>

<Wrapper pageTitle="Ducky Chat">
  <div class="responceDiv">
    <p id="response">Send a message for me to respond!</p>
  </div>
  <form
    class="textboxAndSubmit"
    onsubmit={() => {
      alert(text);
    }}
  >
    <input bind:value={text} type="text" class="textbox" id="textbox" />
    <input type="submit" value="Enter" class="submit" />
  </form>

  <div class="openInBrowser">
    <a href="https://www.w3schools.com">Open Chat in Broswer</a>
  </div>
</Wrapper>

<style>
  .responceDiv {
    height: 60%;
    color: #e2c100;
  }
  .textbox {
    color: black;
    display: inline;
    width: 70%;
  }
  .submit {
    display: inline;
  }
  .textboxAndSubmit {
    display: inline-block;
  }
  .openInBrowser {
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
