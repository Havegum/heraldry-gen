<script context="module">
import Horizontal from '@/components/divisions/Horizontal.svelte';
import Vertical from '@/components/divisions/Vertical.svelte';

export const components = {
  'horizontal': { component: Horizontal },
  'vertical': { component: Vertical },
};
</script>


<script>
export let division;
export let fields;
export let width;
export let height;
export let centerHeight;
</script>


<svelte:component
  this={components[division.type].component}
  fields={fields}
  width={width}
  height={height}
  centerHeight={centerHeight}
/>
