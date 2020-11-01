<script context="module">
export const tags = new Set([
  'geometric'
]);
</script>


<script>
export let color;
export let width;
export let height;

export let properties;



$: size = Math.min(width, height) * 0.5;
</script>


<rect
  fill={color}
  x="{-size / 2}"
  y="{-size / 2}"
  width={size}
  height={size}
  transform="scale(0.75 1) rotate(45)"
/>

{#if properties.dotted}
  <circle
    cx="0"
    cy="0"
    r={size / 2 * 0.5}
    fill="currentColor"
  />
{/if}
