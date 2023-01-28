<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.postSummaries as { slug, title, createdAt }}
	<a href={`/posts/${slug}`}>
		<time>{createdAt}</time>
		<h3>{title}</h3>
	</a>
{/each}
