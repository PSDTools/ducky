<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import duckyLogo from "../../assets/ducky.svg";
  const randomMessages = [
    "Verifying source...",
    "Feeding duck fact checkers..",
    "Making sure they aren't quacks...",
  ];
</script>

<Wrapper pageTitle="Fact Checker">
  <div class="fact-wrapper">
    <div class="loading-message">
      {randomMessages[Math.floor(Math.random() * randomMessages.length)]}
    </div>

    <div style="--duck-logo: url({duckyLogo});" class="loader"></div>
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

  .loading-message {
    font-size: 15px;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
