<script lang="ts">
	import type { PageData } from './$types';
	import { PostTitle, Unimplemented } from '$lib/components';

	export let data: PageData;
</script>

<h2>Latest({data.postSummaries.length})</h2>

{#each data.postSummaries as { slug, title, createdAt }}
	<a href={`/posts/${slug}`}>
		<PostTitle {title} {createdAt} />
	</a>
{/each}

<Unimplemented />
