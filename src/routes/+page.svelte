<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="postSummaries">
	{#each data.postSummaries as { slug, title, createdAt }}
		<a class="article" href={`/posts/${slug}`}>
			<article class="postSummary">
				<h2>{title}</h2>
				<time>{createdAt}</time>
			</article>
		</a>
	{/each}
</div>

<style>
	h2 {
		font-weight: 200;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.postSummaries {
		margin-top: 20px;
	}

	.postSummary {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
