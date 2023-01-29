<script lang="ts">
	import type { PageData } from './$types';
	import { PostTitle } from '$lib/components';

	export let data: PageData;
</script>

{#each data.postSummaries as { slug, title, createdAt }}
	<a href={`/posts/${slug}`}>
		<PostTitle {title} {createdAt} />
		<div class="border" />
	</a>
{/each}

<style>
	.border {
		border-bottom: 1px solid;
	}
</style>
