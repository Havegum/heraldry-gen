<script lang="ts">
import Shield from '@/components/Shield.svelte';
import { shield } from '@/ShieldGen.ts';
// console.log(w, shield)

// export let target; // Element the app attaches to
// export let dev; // Are we in production?
</script>


<Shield field={shield.field}/>
