<script lang="ts">
	import type { PostData, PostDataSummary } from '$lib/domains/post';
	import { PostFrontMatter } from '$lib/components';
	export let post: PostData;
	$: frontMatter = { ...post } as PostDataSummary;
</script>

<PostFrontMatter {frontMatter} />
<div class="content">
	<p>{@html post.content}</p>
</div>

<style>
	.content {
		margin-top: 23px;
	}
</style>
