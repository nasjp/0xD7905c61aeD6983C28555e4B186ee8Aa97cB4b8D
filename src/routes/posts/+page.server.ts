import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/usecases/posts';

export const load = (async () => {
	return {
		postSummaries: await getPostSummaries()
	};
}) satisfies PageServerLoad;

export const prerender = true;
