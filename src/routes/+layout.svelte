<script>
	import '@exampledev/new.css';
	import '../app.css';
	import 'prism-themes/themes/prism-one-light.css';

	import { Header } from '$lib/components';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	/* main {
		margin-top: 30px;
	} */
</style>
