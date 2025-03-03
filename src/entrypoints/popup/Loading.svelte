<script lang="ts">
  import { onMount } from "svelte";
  import duckyLogo from "../../assets/ducky.svg";
  import { useRouter } from "@dvcol/svelte-simple-router";

  interface Props {
    randomMessages: string[];
    url: string;
    loader: (aborter: AbortController) => Promise<void>;
  }

  const { randomMessages, url, loader }: Props = $props();

  const router = useRouter();

  const aborter = new AbortController();

  onMount(() => {
    void (async () => {
      try {
        await loader(aborter);
      } catch (error) {
        if (error instanceof Error && error.message === "Unmounted") {
          return;
        }

        throw error;
      }

      await router.push({ name: url });
    })();

    return () => {
      aborter.abort();
    };
  });
</script>

<span class="loading-message">
  {randomMessages[Math.floor(Math.random() * randomMessages.length)]}
</span>

<div style:--duck-logo="url({duckyLogo})" class="loader"></div>

<style>
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
