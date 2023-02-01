<script lang="ts">
	import { Unimplemented } from '$lib/components';
</script>

<div class="table">
	<div class="row">
		<div class="cell">1</div>
		<div class="cell">github.com</div>
		<div class="cell"><a href="https://github.com/nasjp">nasjp</a></div>
	</div>
	<div class="row">
		<div class="cell">2</div>
		<div class="cell">email</div>
		<div class="cell"><a href="mailto:y.softvalley@hey.com">y.softvalley@hey.com</a></div>
	</div>
</div>

<style>
	.table {
		display: grid;
		grid-template-columns: 30px auto auto;
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
