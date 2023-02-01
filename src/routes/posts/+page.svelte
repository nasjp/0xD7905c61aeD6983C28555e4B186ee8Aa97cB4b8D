<script lang="ts">
	import type { PageData } from './$types';
	import { PostTitle } from '$lib/components';

	export let data: PageData;
</script>

{#each data.postSummaries as { slug, title, createdAt }}
	<a href={`/posts/${slug}`}>
		<PostTitle {title} {createdAt} />
	</a>
{/each}
