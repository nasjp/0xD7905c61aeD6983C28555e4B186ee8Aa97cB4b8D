<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/date';
	import Button from '$lib/components/Button.svelte';

	export let data: PageData;
</script>

<div class="wrap line" />

{#each data.postSummaries as { slug, title, createdAt }}
	<div class="wrap">
		<Button>
			<a href={`/posts/${slug}`} class="link">
				<span>{title}</span>
				<span class="date">{formatDate(createdAt)}</span>
			</a>
		</Button>
	</div>
{/each}

<style>
	.line {
		border: 2.5px solid black;
		box-shadow: 2.5px 0 0px black;
	}

	.wrap {
		margin-top: 27px;
		font-family: Helvetica;
		font-weight: bold;
	}

	.link {
		height: 60px;
		display: grid;
		align-items: center;
		font-size: 16px;
		padding: 10px 0 0 10px;
		grid-template-rows: 1fr 1fr;
	}

	.date {
		font-size: 12px;
		text-align: end;
		padding-right: 10px;
	}
</style>
