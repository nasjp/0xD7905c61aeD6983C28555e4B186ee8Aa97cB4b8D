<script lang="ts">
	import type { PageData } from './$types';
	import { Post } from '$lib/components';

	export let data: PageData;
</script>

<Post post={data.post} />
