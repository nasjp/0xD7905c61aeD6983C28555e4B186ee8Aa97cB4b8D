<script lang="ts">
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let cnt = 0;

	const interval = setInterval(() => (cnt += 1), 500);

	onDestroy(() => clearInterval(interval));
</script>

<div class="header">
	<h1><a href="/">0xD79...4b8D</a></h1>
	<nav>
		<div class="navItem">
			<a href="/about">
				<span class="ruby" class:here={$page.route.id === '/about'}>about<br />me</span>
			</a>
		</div>
		<div class="navItem">
			<a href="/portfolio">
				<span class="ruby" class:here={$page.route.id === '/portfolio'}>my<br />software</span>
			</a>
		</div>
		<div class="navItem">
			<a href="/posts">
				<span class="ruby" class:here={$page.route.id === '/posts'}>my<br />posts</span>
			</a>
		</div>
		<div class="navItem">
			<a href="/contact">
				<span class="ruby" class:here={$page.route.id === '/contact'}>contact<br />me</span>
			</a>
		</div>
	</nav>
</div>

<style>
	.header {
		margin-bottom: 20px;
	}

	.header h1 {
		font-weight: 300;
		font-size: 30px;
	}

	.header nav {
		margin-top: 20px;
		border-top: 1px solid;
		border-bottom: 1px solid;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		padding: 8px 0;
		font-size: 13px;
	}

	.header .navItem {
		border-right: 1px solid;
		display: grid;
		height: 40px;
		list-style: none;
		place-items: center normal;
		padding-left: 8px;
		text-decoration: none;
		cursor: pointer;
	}

	.header .navItem:last-child {
		border: none;
	}

	.ruby {
		color: var(--text-color);
	}

	.here {
		color: var(--link-color);
	}
</style>
