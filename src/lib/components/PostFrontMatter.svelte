<script lang="ts">
	import { formatDate } from '$lib/date';
	import type { PostDataSummary } from '$lib/domains/post';
	export let frontMatter: PostDataSummary;

	$: tag1 = frontMatter.tags.length > 0 ? frontMatter.tags[0] : '-';
	$: tag2 = frontMatter.tags.length > 1 ? frontMatter.tags[1] : '-';
</script>

<div class="title">
	<h3>{frontMatter.title}</h3>
</div>
<div class="table">
	<div class="row">
		<div class="cell">1</div>
		<div class="cell">category</div>
		<div class="cell">{frontMatter.category}</div>
		<div class="cell">-</div>
	</div>
	<div class="row">
		<div class="cell">2</div>
		<div class="cell">tags</div>
		<div class="cell">{tag1}</div>
		<div class="cell">{tag2}</div>
	</div>
	<div class="row">
		<div class="cell">3</div>
		<div class="cell">created</div>
		<div class="cell">{formatDate(frontMatter.createdAt)}</div>
		<div class="cell">-</div>
	</div>
	<div class="row">
		<div class="cell">4</div>
		<div class="cell">updated</div>
		<div class="cell">{formatDate(frontMatter.updatedAt)}</div>
		<div class="cell">-</div>
	</div>
</div>

<style>
	.title {
		padding-left: 10px;
	}

	.table {
		display: grid;
		grid-template-columns: 30px auto auto auto;
		border-top: solid 1px;
	}

	.row {
		display: contents;
	}

	.cell {
		padding: 4px;
		text-align: center;
		border-bottom: solid 1px;
	}

	.cell:not(:first-of-type) {
		border-left: solid 1px;
	}
</style>
