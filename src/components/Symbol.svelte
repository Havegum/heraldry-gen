<script>
import Circle from '@/components/symbols/Circle.svelte';

export let symbol;
export let background;
export let width;
export let height;
export let centerHeight;

const symbols = {
  'circle': { element: Circle },
}
</script>


<rect x="0" y="0" {width} {height} fill={background}/>
<g transform="translate({width / 2} {height * centerHeight})">
  <svelte:component
    this={symbols[symbol.symbol].element}
    color={symbol.color}
    {width}
    {height}
  />
</g>
