<script lang="ts">
  interface Props {
    id: string;
    name: string;
    value: string;
  }

  const props: Props = $props();
</script>

<input {...props} type="radio" />

<style>
  input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #e2c100;
    margin-right: 10px;
    display: inline-block;

    transition:
      background 0.5s,
      transform 0.2s;

    &:checked {
      background-color: #f0d500;
    }

    &:hover {
      transform: scale(1.05);
    }
  }
</style>
