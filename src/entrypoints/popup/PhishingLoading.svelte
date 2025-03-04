<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import Loading from "./Loading.svelte";
  import { delay } from "./utils.ts";
  import { onMount } from "svelte";
  const randomMessages = [
    "Feeding ducks",
    "Scanning for phishy content",
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
      "https://mail.google.com/mail/u/0/#label/Email/FMfcgzQZTVrVkqWGtfcmgxFFkPHsZChW"
    ) {
      //Eli Email
      nextPage = "phishing-real";
    } else if (
      currentTab?.url ==
      "https://mail.google.com/mail/u/0/#label/Email/FMfcgzQZTCpQgxWHktWtFpvJvgTXPsNs"
    ) {
      //Fitz Email
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
