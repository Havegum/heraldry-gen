<script context="module">
export const getFieldCount = ({ fields }) => fields;
export const options = {
  fields: [2, 3, 4]
};
</script>


<script>
import Symbol from '@/components/Symbol.svelte';

export let fields;

$: height = 120 / fields.length;
</script>


{#each fields as field, i}
  <rect
    x="0"
    y={i * height}
    width="100"
    height={height}
    fill={field.background}
  />

  <Symbol
    {...field.symbol}
    background={field.background}
    x={50}
    y={i * height + height / 2}
    width={100}
    height={height}
  />
{/each}
