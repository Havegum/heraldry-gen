<script>
import { tick } from 'svelte';
import Field from '@/components/Field.svelte';

export let field;
export let shape;
export let svg = '';
let svgElement;

$: svgElement && field, tick().then(() => svg = svgElement.outerHTML);

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
</script>


<svg viewBox="0 0 {width} {height}" bind:this={svgElement}>
  <defs>
    <path id="shield" d={shape}/>
    <clipPath id="shield-clip">
      <use href="#shield" />
    </clipPath>
  </defs>

  <g clip-path="url(#shield-clip)">
    <Field {field} {width} {height} />
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
