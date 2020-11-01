<script>
import { getContext } from 'svelte';
const { width, height, centerHeight } = getContext('field');

import Circle from '@/components/symbols/Circle.svelte';

export let symbol;
export let background;
console.log(background)

const symbols = {
  'circle': { element: Circle },
}
</script>


<rect x="0" y="0" {width} {height} fill={background} clip-path="url(#shield-clip)"/>
<g transform="translate({width / 2} {height * centerHeight})">
  <svelte:component this={symbols[symbol.symbol].element} color={symbol.color} />
</g>
