import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/posts';

export const load = (async () => {
	return {
		postSummaries: await getPostSummaries()
	};
}) satisfies PageServerLoad;
