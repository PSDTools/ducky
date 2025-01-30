<script lang="ts">
  import Wrapper from "./Wrapper.svelte";

  var text = $state<string>();
</script>

<Wrapper pageTitle="Ducky Chat">
  <form
    onsubmit={() => {
      alert(text);
    }}
  >
    <input bind:value={text} type="text" class="textbox" id="textbox" />
    <input type="submit" value="submitText" />
  </form>
</Wrapper>

<style>
  .textbox {
    color: black;
  }
</style>
