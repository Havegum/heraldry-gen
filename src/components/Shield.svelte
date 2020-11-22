<script>
import { tick } from 'svelte';
import Division from '@/components/Division.svelte';

export let division;
export let fields;
export let svg = '';
let svgElement;

$: if (svgElement && fields) {
  tick().then(() => svg = svgElement.outerHTML);
}

const width = 100;
const height = 120

const round = `
  M   0,0
  L   0,${height - 50}
  C   0,${height - 25}
     25,${height}
     50,${height}
  C  75,${height}
    100,${height - 25}
    100,${height - 50}
  L 100,0
  Z
`;

console.log('Shield')
</script>


<svg viewBox="0 0 {width} {height}" bind:this={svgElement}>
  <defs>
    <path id="shield" d={round}/>
    <clipPath id="shield-clip">
      <use href="#shield" />
    </clipPath>
  </defs>

  <g clip-path="url(#shield-clip)">
    <Division {...division} {fields} />
  </g>
</svg>


<style>
svg {
  display: block;
  position: relative;
  padding: 2em;
  width: 100%;
  max-width: 20em;
  margin: 0 auto;
  flex-shrink: 0;
}
</style>
