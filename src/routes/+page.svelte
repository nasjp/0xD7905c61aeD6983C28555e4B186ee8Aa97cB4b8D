<script lang="ts">
	import { onDestroy } from 'svelte';
	import { Button, Box, Wrap } from '$lib/components';

	let r = 0;
	let g = 0;
	let b = 255;

	const colorCode = (r: number, g: number, b: number): string =>
		'#' +
		r.toString(16).padStart(2, '0') +
		g.toString(16).padStart(2, '0') +
		b.toString(16).padStart(2, '0');

	let mode = 5;

	$: mode = (() => {
		if (r === 255 && g === 0 && b === 0) {
			return 1;
		}
		if (r === 255 && g === 255 && b === 0) {
			return 2;
		}
		if (r === 0 && g === 255 && b === 0) {
			return 3;
		}
		if (r === 0 && g === 255 && b === 255) {
			return 4;
		}
		if (r === 0 && g === 0 && b === 255) {
			return 5;
		}
		if (r === 255 && g === 0 && b === 255) {
			return 6;
		}

		return mode;
	})();

	const interval = setInterval(() => {
		switch (mode) {
			case 1:
				return g++;
			case 2:
				return r--;
			case 3:
				return b++;
			case 4:
				return g--;
			case 5:
				return r++;
			case 6:
				return b--;
		}
	}, 10);

	onDestroy(() => clearInterval(interval));
</script>

<Wrap>
	<Box>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
			<defs>
				<linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color={colorCode(r, g, b)} />
					<stop offset="100%" stop-color="#fff" />
				</linearGradient>
			</defs>
			<rect x="0" y="0" width="100%" height="600" fill="url(#grad1)" />
			<rect x="0" y="600" width="100%" height="60" fill="#3bc5ec" />
			<rect x="0" y="660" width="100%" height="90" fill="#edb858" />
			<rect x="0" y="750" width="100%" height="800" fill="#5ab44f" />
			<polygon points="0,1000 0,800 300,800 510,1000" fill="#fff" />
			<polygon points="0,1000 0,810 290,810 460,1000" fill="#3bc5ec" />
		</svg>
	</Box>
</Wrap>
<div class="link_group">
	<Wrap>
		<Button>
			<a href="/about" class="link"><span>about me</span></a>
		</Button>
	</Wrap>
	<Wrap>
		<Button>
			<a href="/links" class="link"><span>links</span></a>
		</Button>
	</Wrap>
</div>

<style>
	.link_group {
		display: grid;
		grid-template-columns: 5fr 4fr;
		grid-column-gap: 27px;
	}

	.link {
		height: 48px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 24px;
	}
</style>
