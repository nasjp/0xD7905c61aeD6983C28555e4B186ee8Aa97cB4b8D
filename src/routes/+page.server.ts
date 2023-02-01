import type { PageServerLoad } from './$types';
import { getPostSummaries } from '$lib/usecases/posts';

export const load = (async () => {
	const postSummaries = await getPostSummaries();

	return {
		postSummaries: postSummaries.length > 5 ? postSummaries.slice(0, 4) : postSummaries
	};
}) satisfies PageServerLoad;
