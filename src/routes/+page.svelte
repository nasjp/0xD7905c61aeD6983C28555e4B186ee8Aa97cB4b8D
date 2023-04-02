<script lang="ts">
	import { Button, Box, Wrap } from '$lib/components';
</script>

<Wrap>
	<Box>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
			<defs>
				<linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
					<stop offset="0%" stop-color="#1c4299" />
					<stop offset="100%" stop-color="#fff" />
				</linearGradient>
			</defs>
			<rect x="0" y="0" width="100%" height="630" fill="url(#grad1)" />
			<rect x="0" y="630" width="100%" height="70" fill="#0096d4" />
			<rect x="0" y="700" width="100%" height="300" fill="#e4af4f" />
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
