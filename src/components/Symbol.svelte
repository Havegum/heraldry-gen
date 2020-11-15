<script context="module">
import * as Circle from '@/components/symbols/Circle.svelte';
import * as Empty from '@/components/symbols/Empty.svelte';
import * as Diamond from '@/components/symbols/Diamond.svelte';
import * as Lighthouse from '@/components/symbols/Lighthouse.svelte';
import * as Pickaxe from '@/components/symbols/Pickaxe.svelte';

const symbols = {
  'empty': Empty,
  'circle': Circle,
  'lighthouse': Lighthouse,
  'diamond': Diamond,
  'pickaxe': Pickaxe,
};

export { symbols };
</script>


<script>
export let symbol;
export let background;
export let type;
export let boundary;
console.log($$props)

// if (boundary.touchesRightEdge) boundary.bottomRight.x = 100;
// if (boundary.touchesLeftEdge) boundary.bottomRight.x = 100;

const boundaryToPath = b => `
  M ${b.topLeft.x} ${b.topLeft.y}
  L ${b.topRight.x} ${b.topRight.y}
  L ${boundary.touchesRightEdge ? 100 : b.bottomRight.x} ${b.bottomRight.y}
  L ${boundary.touchesLeftEdge ? 0 : b.bottomLeft.x} ${b.bottomLeft.y} Z
`;

let width = (boundary.topRight.x + boundary.bottomRight.x)  / 2
          - (boundary.topLeft.x  + boundary.bottomLeft.x) / 2;

if (boundary.bottomLeft.x === boundary.bottomRight.x) width = (boundary.topRight.x - boundary.topLeft.x);

let height = (boundary.bottomRight.y + boundary.bottomLeft.y) / 2
             - (boundary.topRight.y + boundary.topLeft.y) / 2;
</script>


<path d={boundaryToPath(boundary)} fill={background}/>
<g transform="translate({symbol.center.x} {symbol.center.y})" style="color: {background}">
  <svelte:component
    this={symbols[symbol.symbol].default}
    color={symbol.color}
    properties={symbol.properties}
    width={width}
    height={height}
  />
</g>
