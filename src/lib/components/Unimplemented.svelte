<script lang="ts">
	import { VirtualWindow } from '$lib/components';
</script>

<VirtualWindow headerTxt="notes" topPercent={16} leftPercent={42}>
	<div class="vw"><p>$ work in progress</p></div>
</VirtualWindow>

<style>
	.vw {
		background: var(--smoke-color);
		height: 100%;
	}

	.vw p {
		margin: 0 auto;
		padding: 5px;
	}
</style>
