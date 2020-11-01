<script lang="ts">
import { setContext } from 'svelte';
import SymbolField from '@/components/SymbolField.svelte';
export let field;

const width = 100;
const height = 120

const centerHeight = 0.475;
setContext('field', { width, height, centerHeight });

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


<figure>
  <svg viewBox="0 0 {width} {height}">
    <defs>
      <path id="shield" d={shieldPath}/>
      <clipPath id="shield-clip">
        <use href="#shield" />
      </clipPath>
    </defs>
    <SymbolField {...field} />
  </svg>

  <figcaption>
    {JSON.stringify(field)}
  </figcaption>
</figure>


<style>
figure {
  max-width: 50em;
  max-height: 50em;
  width: min(100vh, 100vw);
  height: min(100vh, 100vw);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

svg {
  display: block;
  position: relative;
  padding: 2em;
  width: 100%;
  max-width: 20em;
  margin: 0 auto;
}
</style>
