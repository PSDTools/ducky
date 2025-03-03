<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import Loading from "./Loading.svelte";
  import { delay } from "./utils.ts";
  const randomMessages = [
    "Verifying sources",
    "Feeding ducks",
    "Checking for quacks",
    "Scouring the pond for biases",
    "Checking for goose influence",
    "Gathering the flock",
    "Flying the coop",
  ];
</script>

<Wrapper pageTitle="Fact Checker">
  <div class="fact-wrapper">
    <Loading
      loader={async (aborter) => await delay(4550, aborter)}
      {randomMessages}
      url="real"
    />
  </div>
</Wrapper>

<style>
  .fact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
</style>
