<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Phishing">
  <h2>Phishing Alert!</h2>

  <p>
    That video looks Quackers! It's definitely a fake! Be weary of any
    attachments or links! Click more info for more info! Quack!
  </p>

  <div class="open">
    <a class="chat-button" href="https://chatgpt.com">More Info.</a>
  </div>

  <!-- <form>
    <fieldset>
      <Toggle id="phishing" />
      <label class="toggle-switch" for="phishing">Enable Phishing Detector</label>
    </fieldset>
     <fieldset>
      <Toggle id="site-detection" />
      <label class="toggle-switch" for="site-detection">
        Insecure Site Detector
      </label>
    </fieldset>
    <fieldset>
      <Toggle id="mask" />
      <label for="mask" class="toggle-switch">PPI Masker</label>
    </fieldset> 
  </form> -->
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
