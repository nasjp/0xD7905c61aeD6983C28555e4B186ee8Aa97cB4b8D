<script lang="ts">
	import { Button } from '$lib/components';
</script>

<div class="wrap line" />

<div class="wrap">
	<Button>
		<a href="https://twitter.com/0xD79___4b8D" class="link"><span>twitter</span></a>
	</Button>
</div>

<div class="wrap">
	<Button>
		<a href="https://etherscan.io/address/0xD7905c61aeD6983C28555e4B186ee8Aa97cB4b8D" class="link">
			<span>ethereum</span>
		</a>
	</Button>
</div>

<style>
	.line {
		border: 2.5px solid black;
		box-shadow: 2.5px 0 0px black;
	}

	.wrap {
		margin-top: 27px;
		font-family: Helvetica;
		font-weight: bold;
	}

	.link {
		height: 48px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 24px;
	}
</style>
