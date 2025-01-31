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
    <div class={{ "logo-button": true, "small-hover": !isHome }}>
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
        <a href="#/" type="button">
          {@render logo()}
        </a>
      {/if}
    </div>
    <div></div>

    <div>
      <h1 class={{ "big-title": bigTitle }}>{pageTitle}</h1>
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
  .logo-button {
    height: 4em;
    padding: 0.4rem;
    will-change: filter;
    transition: filter 300ms;

    transition:
      filter 0.3s,
      transform 0.2s;

    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;

    &:hover {
      filter: drop-shadow(0 0 0.5rem #e2c100e0);
      transform: scale(1.075);

      &.small-hover {
        filter: drop-shadow(0 0 0.3rem #e2c100e0);
      }
    }

    & > a {
      display: contents;
    }
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-height: 100%;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin: 0;
  }

  .subtitle {
    font-size: 1rem;
  }

  .big-title {
    font-size: 3rem;
  }
</style>
