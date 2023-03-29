<script lang="ts">
	import type { PageData } from './$types';
	import { Button } from '$lib/components';
</script>

<div class="wrap">
	<Button>
		<div class="address">
			<span>0xD7905c61aeD6983C28555e4B186ee8Aa97cB4b8D</span>
		</div>
	</Button>
</div>
<div class="wrap">
	<Button>
		<div class="art" />
	</Button>
</div>
<div class="link_group">
	<div class="wrap">
		<Button>
			<div class="link"><span>about me</span></div>
		</Button>
	</div>
	<div class="wrap">
		<Button>
			<div class="link"><span>posts</span></div>
		</Button>
	</div>
</div>

<style>
	.wrap {
		margin-top: 27px;
		font-family: Helvetica;
		font-weight: bold;
	}

	.address {
		height: 48px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 12px;
	}

	.art {
		padding-top: 100%;
	}

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
