<script>
import Symbol from '@/components/Symbol.svelte';
import Division from '@/components/Division.svelte';

const components = {
  Symbol,
  Division,
};

export let fields;
export let width;
export let height;
export let centerHeight;
</script>



{#each fields as field, i}
  <g transform="translate(0 {i * height * centerHeight})">
    <svelte:component
      this={components[field.type]}
      {...field}
      {width}
      height={height * (!i * centerHeight + !!i * (1 - centerHeight))}
      centerHeight={0.5}
   />
  </g>
{/each}
