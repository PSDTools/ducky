<script lang="ts">
  import RadioButton from "./RadioButton.svelte";
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper pageTitle="Fact Checker">
  <form>
    <fieldset>
      <legend>What would you like to fact check?</legend>
      <div>
        <div>
          <RadioButton id="current" name="answer" value="current" />
          <label for="current" class="option">Use Current Website</label>
        </div>
        <div>
          <RadioButton id="other" name="answer" value="other" />
          <label for="other" class="option">Use Other Website</label>
        </div>
      </div>
    </fieldset>
  </form>
</Wrapper>

<style>
  .option {
    display: inline-block;
    align-items: center;
    margin: 5px 0;
    cursor: pointer;
    font-size: 16px;
  }
</style>
