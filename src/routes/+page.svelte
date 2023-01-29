<script lang="ts">
	import { onDestroy } from 'svelte';

	import type { PageData } from './$types';
	import { PostTitle } from '$lib/components';

	let fullTxt = 'work in progress';
	let cnt = 0;
	$: txt = (() => {
		if (cnt > fullTxt.length) {
			return fullTxt + '.'.repeat(cnt % 4);
		}
		return fullTxt.slice(0, cnt);
	})();

	const interval = setInterval(() => (cnt += 1), 100);

	onDestroy(() => clearInterval(interval));
</script>

<h1>{txt}</h1>
