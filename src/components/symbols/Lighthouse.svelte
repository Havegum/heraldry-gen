<script context="module">
export const tags = new Set([
  'maritime'
]);
</script>


<script>
export let color;
export let width;
export let height;

const d = `M82.1,42.6h3.4L51.9,13.8V9.4h2.5l-3-3.7h-2.6l-3,3.7h2.5v4.4L14.6,42.6h3.4l6.2,9.7v27.1l-2,2.7v4.3h0
	c18.5,0,37.1,0,55.6,0V82l-2-2.7V52.3L82.1,42.6z M26.9,52.3l-6.1-9.7h15.8l2.8,9.7H26.9z M42.2,52.3l-2.8-9.7c7,0,14.1,0,21.1,0
	l-2.8,9.7C52.6,52.3,47.4,52.3,42.2,52.3z M73.1,52.3H60.6l2.8-9.7h15.8L73.1,52.3z`;
</script>


<g transform="scale({Math.min(width, height) / 100}) translate(-50, -50)">
  <path {d} fill={color} transform="scale(1)"/>
</g>
