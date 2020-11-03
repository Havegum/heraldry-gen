<script context="module">
import Circle from '@/components/symbols/Circle.svelte';
import Empty from '@/components/symbols/Empty.svelte';
import Diamond from '@/components/symbols/Diamond.svelte';

export const symbols = {
  'circle': { component: Circle },
  'empty': { component: Empty },
  'diamond': { component: Diamond },
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
    this={symbols[symbol.symbol].component}
    color={symbol.color}
    properties={symbol.properties}
    width={width}
    height={height}
  />
</g>
