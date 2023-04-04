<script>
	import '../app.css';
	import 'prism-themes/themes/prism-one-light.css';
	import { Button } from '$lib/components';

	let hover = false;
</script>

<div class="frame">
	<div class="wrap">
		<div
			on:mouseover={() => {
				hover = true;
			}}
			on:mouseout={() => {
				hover = false;
			}}
			on:focus={() => {
				hover = true;
			}}
			on:blur={() => {
				hover = false;
			}}
		>
			<Button>
				<a href="/" class="address">
					<span>{hover ? '0xd79.eth' : '0xD7905c61aeD6983C28555e4B186ee8Aa97cB4b8D'}</span>
				</a>
			</Button>
		</div>
		<slot />
	</div>
</div>

<style>
	.frame {
		max-width: 584px;
		margin: 0 auto;
		font-family: Helvetica;
		font-weight: bold;
	}

	.wrap {
		margin: 27px;
	}

	.address {
		height: 48px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 12px;
	}
</style>
