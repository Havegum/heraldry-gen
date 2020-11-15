<script>
import Field from '@/components/Field.svelte';

export let fields;
export let width;
export let height;
export let centerHeight;
</script>


{#each fields as field, i}
  <!-- <g transform=  "translate({i * width / 2} 0)"> -->
    <Field
      field={field}
      width={width / 2}
      height={height}
      centerHeight={centerHeight}
    />
  <!-- </g>  -->
{/each}
