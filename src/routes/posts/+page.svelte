<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.postSummaries as { slug, title, createdAt }}
	<a href={`/posts/${slug}`}>
		<div>
			<h3>{title}</h3>
			<p class="data">{createdAt}</p>
		</div>
	</a>
{/each}
