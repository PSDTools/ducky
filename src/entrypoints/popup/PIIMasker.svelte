<script lang="ts">
  import Toggle from "./Toggle.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="PII Masker">
  <form>
    <fieldset>
      <Toggle id="phishing" />
      <label for="phishing" class="toggle-switch">Enable PII Masker</label>
      <!-- Add in button "What is the PII Masker" that links to the chat and asks Lucas-->
    </fieldset>
  </form>
</Wrapper>
