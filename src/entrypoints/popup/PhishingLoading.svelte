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
    //Implement phishing email logic here
    if (
      currentTab?.url ==
      "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2025/m02/cisco-expands-partnership-with-nvidia-to-accelerate-ai-adoption-in-the-enterprise.html"
    ) {
      nextPage = "real";
    } else if (
      currentTab?.url ==
      "https://mail.google.com/mail/u/0/#label/Email/FMfcgzQZTVrVkqWGtfcmgxFFkPHsZChW"
    ) {
      nextPage = "phishing";
    }
  });
</script>

<Wrapper pageTitle="Phishing Detector">
  <div class="fact-wrapper">
    <Loading
      loader={async (aborter) => await delay(4550, aborter)}
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
