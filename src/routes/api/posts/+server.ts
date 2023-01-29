import type { RequestHandler } from './$types';

import { getPostSummaries } from '$lib/usecases/posts';

export const GET = (async () => {
	const postSummaries = await getPostSummaries();

	return new Response(JSON.stringify(postSummaries));
}) satisfies RequestHandler;
