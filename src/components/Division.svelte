<script>
import Horizontal from '@/components/divisions/Horizontal.svelte';
import Vertical from '@/components/divisions/Vertical.svelte';

const components = {
  Horizontal,
  Vertical,
};

export let division;
export let fields;

export let width;
export let height;
export let centerHeight;
</script>


<svelte:component
  this={components[division.type]}
  {fields}
  {width}
  {height}
  {centerHeight}
/>
