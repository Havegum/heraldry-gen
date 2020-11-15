<script>
import Field from '@/components/Field.svelte';

export let fields;
export let width;
export let height;
export let centerHeight;
</script>


{#each fields as field, i}
  <!-- <g transform="translate(0 {i * height * centerHeight})"> -->
    <Field
      field={field}
      width={width}
      height={height * (!i * centerHeight + !!i * (1 - centerHeight))}
      centerHeight={0.5}
    />
  <!-- </g> -->
{/each}
