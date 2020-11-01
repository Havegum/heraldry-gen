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
  <g transform="translate({i * width / 2} 0)">
    <svelte:component
      this={components[field.type]}
       {...field}
       width={width / 2}
       {height}
       {centerHeight}
     />
   </g>
{/each}
