<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import Loading from "./Loading.svelte";
  import { delay } from "./utils.ts";
  import { onMount } from "svelte";
  const randomMessages = [
    "Verifying sources",
    "Feeding ducks",
    "Checking for quacks",
    "Scouring the pond for biases",
    "Checking for goose influence",
    "Gathering the flock",
    "Flying the coop",
  ];
  let currentTab = $state<chrome.tabs.Tab>();
  var nextPage: string = $state("real");

  onMount(async () => {
    [currentTab] = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });

    if ((currentTab.url ?? "").includes("https://newsroom.cisco.com")) {
      nextPage = "real";
    } else if ((currentTab.url ?? "").includes("https://theonion.com/")) {
      nextPage = "fake";
    }
  });
</script>

<Wrapper pageTitle="Fact Checker">
  <div class="fact-wrapper">
    <!-- Implement script here to go to different pages based on url -->

    <Loading
      loader={async (aborter) => await delay(6500, aborter)}
      {randomMessages}
      url={nextPage}
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
