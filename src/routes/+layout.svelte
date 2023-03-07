<script>
	import '../app.css';
	import 'prism-themes/themes/prism-one-light.css';

	import { Header } from '$lib/components';
</script>

<div class="frame">
	<div class="wrap">
		<Header />
		<slot />
	</div>
</div>

<style>
	.frame {
		max-width: 584px;
		margin: 0 auto;
	}

	.wrap {
		margin: 10px;
	}
</style>
