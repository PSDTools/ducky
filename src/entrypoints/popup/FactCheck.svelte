<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Fact Checker">
  <label class="option">
    <input type="radio" name="answer" value="A" />
    <span class="bubble"></span>Use Current Website
  </label>
  <label class="option">
    <input type="radio" name="answer" value="B" />
    <span class="bubble"></span>Use Other Website
  </label>
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

  /* body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            text-align: left;
        } */
  .question {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .option {
    display: flex;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    font-size: 16px;
  }
  .bubble {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ebde1f;
    margin-right: 10px;
    display: inline-block;
  }
  input[type="radio"] {
    display: none;
  }
  input[type="radio"]:checked + .bubble {
    background-color: #ebde1f;
  }
</style>
