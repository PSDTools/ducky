<script lang="ts">
  interface Props {
    id: string;
  }

  const props: Props = $props();
</script>

<input {...props} type="checkbox" />

<style>
  input[type="checkbox"] {
    position: relative;
    width: 50px;
    height: 30px;
    border-radius: 25px;
    background-color: #cccccc;
    color: #f0d500;
    transition:
      background-color 0.3s,
      transform 0.2s;
    outline: none;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 30%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 1.25rem;
      width: 1.25rem;
      background-color: rgb(255, 255, 255);
      transition: left 0.3s;
    }

    &:checked {
      background-color: #f0d500;

      background-image: none;
      &::after {
        left: 70%;
      }
    }

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
