<script context="module">
export const tags = new Set([
  'geometric'
]);
</script>


<script>
export let color;
export let width;
export let height;
</script>


<circle cx="0" cy="0" r="{(Math.min(width, height) - 2) * 0.66666 / 2}" fill="{color}" />
