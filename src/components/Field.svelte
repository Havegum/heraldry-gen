<script>
import Symbol from '@/components/Symbol.svelte';
import Division from '@/components/Division.svelte';

const component = { Symbol, Division };

export let field;
export let width;
export let height;
export let centerHeight;
export let type; type;
</script>


<svelte:component
  this={component[field.type]}
  {...field}
  width={width}
  height={height}
  centerHeight={centerHeight}
/>
