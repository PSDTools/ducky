<script lang="ts">
  import { onMount } from "svelte";
  import Wrapper from "./Wrapper.svelte";
  import duckyLogo from "../../assets/ducky.svg";
  import { useRouter } from "@dvcol/svelte-simple-router";
  const randomMessages = [
    "Verifying sources",
    "Feeding ducks",
    "Checking for quacks",
    "Scouring the pond for biases",
    "Checking for goose influence",
    "Gathering the flock",
    "Flying the coop",
  ];

  const router = useRouter();

  onMount(() => {
    const timeout = setTimeout(() => {
      void router.push({ name: "real" });
    }, 4550);

    return () => {
      clearTimeout(timeout);
    };
  });
</script>

<Wrapper pageTitle="Fact Checker">
  <div class="fact-wrapper">
    <span class="loading-message">
      {randomMessages[Math.floor(Math.random() * randomMessages.length)]}
    </span>

    <div style:--duck-logo="url({duckyLogo})" class="loader"></div>
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

  @keyframes loadingDots {
    0%,
    100% {
      content: "";
    }
    25% {
      content: ".";
    }
    50% {
      content: "..";
    }
    75% {
      content: "...";
    }
  }

  .loading-message {
    font-size: 15px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::after {
      content: "";
      width: 3ch;
      display: inline-block;
      animation: loadingDots 1.5s infinite;
    }
  }

  .loader {
    width: 160px;
    aspect-ratio: 1.154;
    background:
      no-repeat var(--duck-logo) 50% 0,
      no-repeat var(--duck-logo) 0 100%,
      no-repeat var(--duck-logo) 100% 100%;
    background-size: 35% calc(35% * 1.154);
    animation: l16 1s infinite;
  }

  @keyframes l16 {
    50%,
    100% {
      background-position:
        100% 100%,
        50% 0,
        0 100%;
    }
  }
</style>
