<script lang="ts">
	export let title: string;
	export let createdAt: string;
	export let content: string;
</script>

<h3>{title}</h3>
<p class="data">{createdAt}</p>
<div class="content">
	<p>{@html content}</p>
</div>

<style>
</style>
