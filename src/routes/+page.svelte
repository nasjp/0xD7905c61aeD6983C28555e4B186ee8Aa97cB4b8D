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

	.art:hover {
		background-color: #e74c3c;
		animation: bg-color 10s infinite;
	}

	@keyframes bg-color {
		0% {
			background-color: #e74c3c;
		}
		20% {
			background-color: #f1c40f;
		}
		40% {
			background-color: #1abc9c;
		}
		60% {
			background-color: #3498db;
		}
		80% {
			background-color: #9b59b6;
		}
		100% {
			background-color: #e74c3c;
		}
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
