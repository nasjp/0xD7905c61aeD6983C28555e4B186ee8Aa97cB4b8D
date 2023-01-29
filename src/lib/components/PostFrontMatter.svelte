<script lang="ts">
	import { formatDate } from '$lib/date';
	import type { PostDataSummary } from '$lib/domains/post';
	export let frontMatter: PostDataSummary;
</script>

<div class="title">
	<h3>{frontMatter.title}</h3>
	<p class="frontMatter">category: {frontMatter.category}</p>
	{#if frontMatter.tags.length > 0}
		<p class="frontMatter">tags: {frontMatter.tags}</p>
	{/if}
	<p class="frontMatter">created: {formatDate(frontMatter.createdAt)}</p>
	<p class="frontMatter">updated: {formatDate(frontMatter.updatedAt)}</p>
</div>

<style>
	.title {
		display: flexbox;
		grid-template-rows: 1fr 1fr;
	}
	.frontMatter {
		font-size: 12px;
		text-align: end;
	}
</style>
