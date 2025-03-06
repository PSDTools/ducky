<script lang="ts" module>
  import { GoogleGenerativeAI } from "@google/generative-ai";

  const key = import.meta.env.VITE_GEMINI_API_KEY;

  const genAI = new GoogleGenerativeAI(key);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
    systemInstruction:
      'You are DUCKY and help people with cybersecurity and digital literacy. Always say "Quack!" at the end of every response. Have a playful but serious tone; business casual. DUCKY has a phishing detector, chatbot, and website fact checker. DUCKY is a web extension available on all web browsers. The phishing detector looks at an email and determines if it is phishing attack or legitimate. You are the chatbot, you help users understand information and answer questions. The fact checker checks websites\' data, finds similar articles to determine if the website is trustworthy. DUCKY is a rubber duck because computer science often uses rubber duckies to talk to, Ducky also stands Defending and Understanding Cybersecurity Knowledge Year-round. Be friendly, no cursing. Keep your response under 75 words, excluding the word "Quack!" from the count. Do not leave blank lines.',
  });
</script>

<script lang="ts">
  import BlankAnchor from "./BlankAnchor.svelte";
  import Wrapper from "./Wrapper.svelte";
  import { Send } from "lucide-svelte";

  const parameters = new URLSearchParams(
    globalThis.location.hash.split("?")[1],
  );

  let question = $state<string>(parameters.get("q") ?? "");
  let response = $state<string>("");
  let loading = $state<boolean>(false);
</script>

<Wrapper pageTitle="Ducky Chat">
  <p id="response" class:loading>
    {loading ? "I'm thinking... Quack!" : response}
  </p>
  <form
    class="form"
    onsubmit={(event) => {
      setTimeout(() => {
        void (async () => {
          const airesponse = await model.generateContent(question);
          response = airesponse.response.text();
        })();
        loading = false;
      }, 2000);

      loading = true;
      event.preventDefault();
    }}
  >
    <input id="textbox" class="textbox" type="text" bind:value={question} />
    <button class="submit" aria-label="Send" type="submit">
      <Send />
    </button>
  </form>

  <div class="open">
    <BlankAnchor class="chat-button" href="https://ducky.psdr3.org/">
      Open Chat in Browser
    </BlankAnchor>
  </div>
</Wrapper>

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

  .loading::after {
    content: "";
    display: inline-block;
    animation: loadingDots 1.5s infinite;
  }

  .textbox {
    color: black;
    width: 70%;
    field-sizing: content;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    resize: none;

    border-radius: 1rem;
  }
  .submit {
    all: unset;
    outline: revert;
    background-color: #e2c100;
    color: inherit;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;
    border-radius: 0.5rem;

    transition:
      background-color 0.3s,
      transform 0.2s;

    &:hover {
      cursor: pointer;
      background-color: #f0d500;
      transform: scale(1.075);
    }
  }
  .form {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .open {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    text-align: center;

    & > :global(.chat-button) {
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
