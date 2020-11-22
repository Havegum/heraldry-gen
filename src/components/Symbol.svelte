<script context="module">
import * as Circle from '@/components/symbols/Circle.svelte';
import * as Empty from '@/components/symbols/Empty.svelte';
import * as Diamond from '@/components/symbols/Diamond.svelte';
import * as Lighthouse from '@/components/symbols/Lighthouse.svelte';
import * as Pickaxe from '@/components/symbols/Pickaxe.svelte';

export const symbols = {
  'empty': Empty,
  'circle': Circle,
  'lighthouse': Lighthouse,
  'diamond': Diamond,
  'pickaxe': Pickaxe,
};
</script>


<script>
export let symbol;
export let color;
export let properties;
export let x;
export let y;
export let width;
export let height;
console.log({ symbol, color })
</script>


<g transform="translate({x} {y})" style="color: {background}">
  <svelte:component
    this={symbols[symbol].default}
    color={color}
    properties={properties}
    width={width}
    height={height}
  />
</g>
