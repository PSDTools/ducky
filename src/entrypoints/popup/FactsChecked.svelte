<script lang="ts">
  import BlankAnchor from "./BlankAnchor.svelte";
  import Wrapper from "./Wrapper.svelte";

  let factuality = $state(96);
  const factual = $derived(factuality > 50);
</script>

<Wrapper pageTitle="Fact Checker">
  <div class="fact-wrapper">
    <svg class="circular-chart" viewBox="0 0 36 36">
      <path
        class="circle"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        stroke-dasharray="{factuality}, 100"
      />
      <text class="percentage" x="18" y="20.35">{factuality}%</text>
    </svg>

    <span class="factuality">
      <!-- 8-ball? -->
      {factual ? "Likely True" : "Likely fake"}
    </span>

    <details class="details">
      <summary>Sources</summary>
      <ul>
        <li>
          <BlankAnchor
            href="https://www.wwt.com/news/cisco-expands-partnership-with-nvidia-to-accelerate-ai-adoption-in-the-enterprise"
          >
            Official Blogpost
          </BlankAnchor>
        </li>
      </ul>
    </details>
    <div class="open">
      {#snippet button()}
        <!--
          So, technically, there isn't a search passed here, just a fragment.
          But... the router handles it, so we just do some hacks on the chat page.
        -->
        <a
          class="chat-button"
          data-query={JSON.stringify({
            q: "How can I fact check sources on my own?",
          })}
          href="#/chat"
        >
          How can I fact check sources on my own?
        </a>
      {/snippet}

      {@render button()}
    </div>
  </div>
</Wrapper>

<style>
  .details {
    width: 100%;

    & summary {
      font-size: 1.4rem;
    }
  }

  .fact-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .factuality {
    font-size: 2rem;
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 150px;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;

    stroke: #e2c100;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .percentage {
    fill: #e2c100;
    font-size: 0.5em;
    text-anchor: middle;
  }
  .open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;

    & > .chat-button {
      width: 100%;
      background-color: #e2c100;
      color: #242424;
      transition:
        border-color 0.25s,
        background-color 0.3s,
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
