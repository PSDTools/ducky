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
      {factual ? "Likely true" : "Possibly a falsehood"}
    </span>

    <details class="details">
      <summary>Sources</summary>
      <ul>
        <li>
          <BlankAnchor
            href="https://www.wwt.com/press-release/wwt-has-entered-into-a-definitive-agreement-to-acquire-softchoice"
          >
            Official Press Release
          </BlankAnchor>
        </li>
        <li>
          <BlankAnchor
            href="https://www.wwt.com/news/wwt-to-buy-softchoice-in-dollar125b-blockbuster-heres-what-to-know"
          >
            Official Blogpost
          </BlankAnchor>
        </li>
      </ul>
    </details>
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
</style>
