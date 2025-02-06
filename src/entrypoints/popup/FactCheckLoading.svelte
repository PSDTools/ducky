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
  <div class="loading-message">
    {randomMessages[Math.floor(Math.random() * randomMessages.length)]}
  </div>

  <div class="spinner-container">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <img class="duck" alt="Duck" src={duckyLogo} />
  </div>
</Wrapper>

<style>
  .loading-message {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .spinner {
    display: flex;
    position: relative;
    width: 128px;
    height: 128px;
  }

  .spinner div {
    width: 24px;
    height: 24px;
    background-color: #818181;
    border-radius: 50%;
    position: absolute;
    animation: fade 1.2s infinite ease-in-out;
  }

  .spinner div:nth-child(1) {
    top: 0;
    left: 50%;
    animation-delay: -1.1s;
  }
  .spinner div:nth-child(2) {
    top: 14%;
    left: 85%;
    animation-delay: -1s;
  }
  .spinner div:nth-child(3) {
    top: 50%;
    left: 100%;
    animation-delay: -0.9s;
  }
  .spinner div:nth-child(4) {
    top: 85%;
    left: 85%;
    animation-delay: -0.8s;
  }
  .spinner div:nth-child(5) {
    top: 100%;
    left: 50%;
    animation-delay: -0.7s;
  }
  .spinner div:nth-child(6) {
    top: 85%;
    left: 14%;
    animation-delay: -0.6s;
  }
  .spinner div:nth-child(7) {
    top: 50%;
    left: 0;
    animation-delay: -0.5s;
  }
  .spinner div:nth-child(8) {
    top: 14%;
    left: 14%;
    animation-delay: -0.4s;
  }

  @keyframes fade {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }

  .duck {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
  }
</style>
