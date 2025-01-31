<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Settings">
  <div style="display: flex; align-items: center; gap: 1rem;">
    <label class="toggle-switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
    <p>Phishing Detector</p>
  </div>
  <div style="display: flex; align-items: center; gap: 1rem;">
    <label class="toggle-switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
    <p>Insecure Site Detector</p>
  </div>
  <div style="display: flex; align-items: center; gap: 1rem;">
    <label class="toggle-switch">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
    <p>PPI Masker</p>
  </div>
</Wrapper>

<style>
  /* Container for the toggle */
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }

  /* Hide default checkbox */
  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The track */
  .slider {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 24px;
    width: 100%;
    height: 100%;
    transition: background-color 0.3s;
  }

  /* The circular slider */
  .slider::before {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  /* Toggled state */
  .toggle-switch input:checked + .slider {
    background-color: #ebde1f;
  }

  .toggle-switch input:checked + .slider::before {
    transform: translateX(26px);
  }
</style>
