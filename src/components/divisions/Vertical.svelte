<script context="module">
export const getFieldCount = ({ fields }) => fields;
export const options = {
  fields: [2, 3, 4]
};
</script>


<script>
import Symbol from '@/components/Symbol.svelte';

export let fields;

$: width = 100 / fields.length;
</script>


{#each fields as field, i}
    <rect
      x={i * width}
      y="0"
      width={width}
      height="120"
      fill={field.background}
    />

    <Symbol
      {...field.symbol}
      background={field.background}
      x={i * width + width / 2}
      y={120 / 2}
      width={width}
      height={120}
    />
{/each}
