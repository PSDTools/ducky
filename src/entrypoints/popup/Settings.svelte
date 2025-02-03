<script lang="ts">
  import Toggle from "./Toggle.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Settings">
  <form>
    <fieldset>
      <Toggle id="phishing" />
      <label for="phishing" class="toggle-switch">Phishing Detector</label>
    </fieldset>
    <fieldset>
      <Toggle id="site-detection" />
      <label for="site-detection" class="toggle-switch">
        Insecure Site Detector
      </label>
    </fieldset>
    <fieldset>
      <Toggle id="mask" />
      <label for="mask" class="toggle-switch">PPI Masker</label>
    </fieldset>
  </form>
</Wrapper>
