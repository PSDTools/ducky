<script lang="ts">
  import duckyLogo from "../../assets/ducky.svg";
</script>

<main>
  <div class="header">
    <img src={duckyLogo} class="logo svelte" alt="Ducky Logo" />

    <h1>Ducky</h1>
  </div>

  <hr />

  <div class="card">
    {#snippet button(name: string)}
      <a class="button" href="#/">{name}</a>
    {/snippet}

    {@render button("Chat")}
    {@render button("AI Image Detector")}
    {@render button("Fact Checker")}
  </div>
</main>

<style>
  .logo {
    height: 4em;
    padding: 1rem;
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

    & > * {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
    }
  }
</style>
