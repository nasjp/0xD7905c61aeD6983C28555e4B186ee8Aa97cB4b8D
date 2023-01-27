import type { RequestHandler } from './$types';

import { getPosts } from '$lib/posts';

export const GET = (async () => {
	const posts = await getPosts();

	return new Response(JSON.stringify(posts));
}) satisfies RequestHandler;
