<script>
import Shield from '@/components/Shield.svelte';
import { shield } from '@/ShieldGen.ts';

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


<Shield field={shield.field} bind:svg/>

<svelte:head>
  <link rel="icon" href={dataURI(svg)}>
</svelte:head>
