<script>
	import '../app.css';
	import 'prism-themes/themes/prism-one-light.css';
	import { Button } from '$lib/components';
</script>

<div class="frame">
	<div class="wrap">
		<Button>
			<a href="/" class="address">
				<span>0xD7905c61aeD6983C28555e4B186ee8Aa97cB4b8D</span>
			</a>
		</Button>
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
		font-family: Helvetica;
		font-weight: bold;
	}
</style>
