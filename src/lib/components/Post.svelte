<script lang="ts">
	export let title: string;
	export let createdAt: string;
	export let content: string;
</script>

<strong>{createdAt}</strong>
<h3>{title}</h3>
<div class="content">
	<p>{@html content}</p>
</div>
