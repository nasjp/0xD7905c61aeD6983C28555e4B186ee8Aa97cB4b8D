<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/date';
	import { Button } from '$lib/components';

	export let data: PageData;
</script>

<div class="wrap all_posts_wrap">
	<Button>
		<a href="/posts" class="all_posts"><span>all posts</span></a>
	</Button>
</div>

<div class="wrap line" />

<div class="wrap box front_matter">
	<div>
		<h3 class="title">{data.post.title}</h3>
	</div>
	<h3 class="created_at">{formatDate(data.post.createdAt)}</h3>
</div>
<div class="wrap box">
	<div class="content">
		<p>{@html data.post.content}</p>
	</div>
</div>

<style>
	.wrap {
		margin-top: 27px;
	}

	.line {
		border: 2.5px solid black;
		box-shadow: 2.5px 0 0px black;
	}

	.all_posts_wrap {
		display: flex;
		justify-content: flex-end;
	}

	.all_posts {
		height: 48px;
		padding: 0 20px;
		display: grid;
		justify-items: center;
		align-items: center;
		font-size: 24px;
	}

	.box {
		border: 5px solid black;
		box-shadow: 5px 5px 0px black;
	}

	.front_matter {
		padding: 10px;
	}

	.title {
		font-size: 40px;
		margin: 0px;
	}

	.created_at {
		padding-right: 10px;
		font-size: 16px;
	}

	.content {
		margin: 0 10px;
	}
</style>
