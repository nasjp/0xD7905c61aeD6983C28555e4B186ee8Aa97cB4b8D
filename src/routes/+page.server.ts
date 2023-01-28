import type { PageLoad } from './$types';
import { getPostSummaries } from '$lib/posts';

export const load = (async () => {
	return {
		postSummaries: await getPostSummaries()
	};
}) satisfies PageLoad;
