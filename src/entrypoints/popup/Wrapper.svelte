<script lang="ts">
  import type { Snippet } from "svelte";

  import backButton from "../../assets/back-button.svg";
  import duckyLogo from "../../assets/ducky.svg";

  interface Props {
    children: Snippet;
    isHome?: boolean;
    pageTitle: string;
    bigTitle?: boolean;
    subtitle?: string;
  }

  let {
    children,
    isHome = false,
    pageTitle,
    subtitle,
    bigTitle = false,
  }: Props = $props();
</script>

<div>
  <div class="header">
    <div class="logobutton">
      {#snippet logo()}
        <img
          src={isHome ? duckyLogo : backButton}
          class="logo"
          alt={isHome ? "Ducky Logo" : "Go Back"}
        />
      {/snippet}

      {#if isHome}
        {@render logo()}
      {:else}
        <a class={{ logolink: true }} href="#/" type="button">
          {@render logo()}
        </a>
      {/if}
    </div>
    <div></div>

    <div>
      <h1 class={{ bigTitle }}>{pageTitle}</h1>
      {#if subtitle !== undefined}
        <span class={{ subtitle }}>Teaching & Protecting</span>
      {/if}
    </div>
  </div>
  <hr />

  <main>
    {@render children()}
  </main>
</div>

<style>
  .logobutton {
    height: 4em;
    padding: 0.4rem;
    will-change: filter;
    transition: filter 300ms;

    transition:
      background 0.3s,
      transform 0.2s;

    &:hover {
      filter: drop-shadow(0 0 0.5rem #e2c100e0);
      transform: scale(1.075);
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 5rem;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: bolder;
    margin: 0;
  }

  .subtitle {
    font-size: 1rem;
  }

  .bigTitle {
    font-size: 3rem;
  }

  .logolink {
    display: contents;
  }
</style>
