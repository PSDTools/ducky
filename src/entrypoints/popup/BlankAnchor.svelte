<script lang="ts">
  import type { HTMLAnchorAttributes } from "svelte/elements";

  const props: HTMLAnchorAttributes = $props();
</script>

<a
  {...props}
  href={props.href}
  onclick={(event) => {
    window.open(props.href ?? undefined, "_blank");

    event.stopPropagation();
    event.preventDefault();

    window.close();
  }}
  target="_blank"
>
  {@render props.children?.()}
</a>
