<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
</script>

<Wrapper
  bigTitle={true}
  isHome={true}
  pageTitle="Home"
  subtitle="Teaching & Protecting"
>
  <div class="card">
    {#snippet button(name: string, route: string)}
      <a class="link-button" href={route}>{name}</a>
    {/snippet}

    {@render button("Chat", "#/chat")}
    {@render button("Fact Checker", "#/fact-check")}
    {@render button("Phishing Detector", "#/phishing")}
  </div>
</Wrapper>

<style>
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 1rem;
    text-align: center;
    height: 17.5rem;

    & > .link-button {
      width: 100%;
      height: 15%;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #e2c100;
      color: #242424;
      transition:
        border-color 0.25s,
        background 0.3s,
        transform 0.2s;

      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;

      &:hover {
        background-color: #f0d500;
        transform: scale(1.075);
      }
    }
  }
</style>
