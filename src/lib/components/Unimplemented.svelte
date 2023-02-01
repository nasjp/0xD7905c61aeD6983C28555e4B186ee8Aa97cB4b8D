<script lang="ts">
	import { onDestroy } from 'svelte';

	let fullTxt = 'unimplemented';
	let cnt = 0;
	$: txt = (() => {
		if (cnt > fullTxt.length) {
			return fullTxt + '.'.repeat((cnt - 1) % 4);
		}
		return fullTxt.slice(0, cnt);
	})();

	const interval = setInterval(() => (cnt += 1), 300);

	onDestroy(() => clearInterval(interval));
</script>

<h1>{@html txt}</h1>
