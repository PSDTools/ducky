<script lang="ts">
  import Wrapper from "./Wrapper.svelte";
  import { AlertTriangle } from "lucide-svelte";
</script>

<Wrapper pageTitle="Phishing">
  <div class="center-stuff">
    <AlertTriangle color="#ff0000" size="8rem" />

    <p>This message may be from quacks!</p>

    <div class="open">
      <a class="chat-button" href="https://chatgpt.com">
        How can I spot phishing?
      </a>
    </div>
  </div>
</Wrapper>

<style>
  .center-stuff {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-align: center;
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
