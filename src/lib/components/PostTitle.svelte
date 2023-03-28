<script lang="ts">
	import { formatDate } from '$lib/date';
	export let title: string;
	export let createdAt: Date;
</script>

<div class="postTitle">
	<h3>{title}</h3>
	<p class="date">created {formatDate(createdAt)}</p>
</div>

<style>
	.postTitle {
		padding-left: 10px;
		display: flexbox;
		grid-template-rows: 1fr 1fr;
		border-left: 1px solid;
		border-right: 1px solid;
		border-top: 1px solid;
	}

	.date {
		font-size: 12px;
		text-align: end;
		padding-right: 10px;
	}
</style>
