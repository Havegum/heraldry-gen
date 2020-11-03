<script>
import Field from '@/components/Field.svelte';

export let field;
export let svg = '';
let svgElement;

$: if (svgElement) svg = svgElement.outerHTML;

const width = 100;
const height = 120

const centerHeight = 0.475;

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

const aBit = 25;

const pointy = `
  M  0,0
  L  0,50
  C  0,${height/2 + aBit}
    ${50 - aBit},${height - aBit/2}
    50,${height}
  C ${50 + aBit},${height - aBit/2}
    100,${height/2 + aBit}
    100,50
  L 100,0
  Z
`;

const shieldPath = pointy;
</script>


<svg viewBox="0 0 {width} {height}" bind:this={svgElement}>
  <defs>
    <path id="shield" d={shieldPath}/>
    <clipPath id="shield-clip">
      <use href="#shield" />
    </clipPath>
  </defs>

  <g clip-path="url(#shield-clip)">
    <Field {field} {width} {height} {centerHeight} />
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
