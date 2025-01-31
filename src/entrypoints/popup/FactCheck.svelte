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
