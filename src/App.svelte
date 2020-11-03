<script>
import Shield from '@/components/Shield.svelte';
import { simple, complex } from '@/sampleShields.ts';
import { generate } from '@/shieldGen.ts';

let shield = generate();
console.log(shield);

// export let target; // Element the app attaches to
// export let dev; // Are we in production?

let svg = '<svg></svg>';
function dataURI (svg) {
  const ns = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink"';
  svg = ns + svg.slice(4);
  svg = svg.replace(/\n/g, '');
  svg = encodeURIComponent(svg)
  return 'data:image/svg+xml;utf8,' + svg;
}
</script>


<svelte:head>
  <link rel="icon" href={dataURI(svg)}>
</svelte:head>


<figure>
  <Shield field={shield.field} bind:svg />
  <figcaption>
    <pre>
      {JSON.stringify(shield.field, null, 2)}
    </pre>
  </figcaption>
</figure>


<style>
figure {
  max-width: 50em;
  height: min(100vh, 100vw);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

pre {
  background-color: #ffffff0a;
  padding: .5em;
  border-left: 2px solid var(--gray);
}
</style>
