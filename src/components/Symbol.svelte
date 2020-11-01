<script context="module">
import Circle from '@/components/symbols/Circle.svelte';
import Empty from '@/components/symbols/Empty.svelte';
import Diamond from '@/components/symbols/Diamond.svelte';

const symbols = {
  'circle': { element: Circle },
  'empty': { element: Empty },
  'diamond': { element: Diamond },
}
</script>


<script>
export let symbol;
export let background;
export let width;
export let height;
export let centerHeight;
export let type; type;
</script>


<rect x="0" y="0" {width} {height} fill={background}/>
<g transform="translate({width / 2} {height * centerHeight})" style="color: {background}">
  <svelte:component
    this={symbols[symbol.symbol].element}
    color={symbol.color}
    properties={symbol.properties}
    {width}
    {height}
  />
</g>
