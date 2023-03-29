<script lang="ts">
	import { Button } from '$lib/components';
</script>

<div class="wrap">
	<Button>
		<div class="art" />
	</Button>
</div>
<div class="link_group">
	<div class="wrap">
		<Button>
			<a href="/about" class="link"><span>about me</span></a>
		</Button>
	</div>
	<div class="wrap">
		<Button>
			<a href="/posts" class="link"><span>posts</span></a>
		</Button>
	</div>
</div>

<style>
	.wrap {
		margin-top: 27px;
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
