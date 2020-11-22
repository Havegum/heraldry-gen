<script context="module">
import * as Horizontal from '@/components/divisions/Horizontal.svelte';
import * as Vertical from '@/components/divisions/Vertical.svelte';

export const divisions = {
  'horizontal': Horizontal,
  'vertical': Vertical,
};
</script>


<script>
export let type;
console.log(type)
export let properties = {};
export let fields;
</script>


<svelte:component
  this={divisions[type].default}
  {...properties}
  {fields}
/>
