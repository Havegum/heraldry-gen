<script context="module">
const tags = new Set([
  'mining'
]);

const options = {
  // dotted: [true, false]
};

export { tags, options };
</script>


<script>
export let color;
export let width;
export let height;

const d = `M62.2,15.8C54.4,22,46,28.1,40.1,34.9c-0.3,0.4-0.7,0.8-1.1,1.2l-4.4,4.4c-0.4,0.4-0.8,0.7-1.2,1.1
	c-6.8,5.9-12.8,14.3-19.1,22.1c-0.4,0.5-1.3-0.3-1.1-0.7c3.9-8.8,7.5-19.4,15.2-26.9l6.2-6.2c7.5-7.6,18.1-11.3,26.9-15.2
	C61.9,14.5,62.7,15.4,62.2,15.8z M33.4,30.2c-0.5-0.3-1.1-0.5-1.4-0.4c-0.3,0.1-1.1,0.6-2,1.6c-0.9,0.9-1.5,1.8-1.6,2
	c-0.1,0.3,0.1,0.9,0.4,1.4L33.4,30.2z M82,79.1l-4.3,4.3c-0.2,0.2-0.2,0.4,0,0.6l0.9,1.2c0.2,0.2,0.5,0.2,0.7,0l4.6-4.6
	c0.2-0.2,0.2-0.5,0-0.7l-1.2-0.9C82.4,78.9,82.2,79,82,79.1z M77.3,82.8l4-4c0.2-0.2,0.2-0.5,0-0.6C55,56.4,44.2,39.4,39.4,36.9
	l-3.9,3.9c2.6,4.8,19.6,15.7,41.2,42C76.8,83,77.1,83,77.3,82.8z`;
</script>

<g transform="scale({Math.min(width, height) / 100}) translate(-50, -50)">
  <path {d} fill={color} transform="scale(1)"/>
</g>
