<script lang="ts">
  import duckyLogo from "../../assets/ducky.svg";
</script>

<main>
  <div class="header">
    <img src={duckyLogo} class="logo svelte" alt="Ducky Logo" />
    <div>
      <h1 style="margin: 0;">Ducky</h1>
      <span style="font-size: medium;">Teaching and Protecting</span>
    </div>
  </div>
  <hr />

  <div class="card">
    {#snippet button(name: string, route: string)}
      <a class="button" href={route}>{name}</a>
    {/snippet}

    {@render button("Chat", "#/chat")}
    {@render button("AI Image Detector", "#/ai-detector")}
    {@render button("Fact Checker", "#/fact-check")}
    {@render button("Settings", "#/settings")}
  </div>
</main>

<style>
  .logo {
    height: 4em;
    padding: 0.4rem;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #e2c100e0);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    & > a.button {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
      transition:
        background 0.3s,
        transform 0.2s;

      &:hover {
        transform: scale(1.075);
      }
    }
  }
</style>
