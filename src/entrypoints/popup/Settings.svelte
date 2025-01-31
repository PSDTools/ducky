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
  .logo {
    height: 4em;
    padding: 0.4rem;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #e2c100e0);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: left;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    & > a.button {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
      transition:
        background 0.3s,
        transform 0.2s;

      &:hover {
        transform: scale(1.075);
      }
    }
  }
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
