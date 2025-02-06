<script lang="ts">
  import Toggle from "./Toggle.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Phishing Detector">
  <form>
    <fieldset>
      <Toggle id="phishing" />
      <label class="toggle-switch" for="phishing"
        >Enable Phishing Detector</label
      >
    </fieldset>
    <!-- <fieldset>
      <Toggle id="site-detection" />
      <label class="toggle-switch" for="site-detection">
        Insecure Site Detector
      </label>
    </fieldset>
    <fieldset>
      <Toggle id="mask" />
      <label for="mask" class="toggle-switch">PPI Masker</label>
    </fieldset> -->
  </form>
</Wrapper>
