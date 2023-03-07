<script>
	import '../app.css';
	import 'prism-themes/themes/prism-one-light.css';

	import { Header } from '$lib/components';
</script>

<div class="wrap">
	<Header />
	<slot />
</div>

<style>
	.wrap {
		margin: 10px;
		max-width: 584px;
		overflow-x: hidden;
		min-height: 100vh;
		margin: 0 auto;
		position: relative;
	}
</style>
