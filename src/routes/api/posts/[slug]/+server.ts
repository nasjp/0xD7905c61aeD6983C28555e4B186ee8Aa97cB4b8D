import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

import { getPost } from '$lib/posts';

export const GET = (async ({ params }) => {
	const post = await getPost(params.slug);
	if (post) {
		return new Response(JSON.stringify(post));
	}

	throw error(404, 'Not found');
}) satisfies RequestHandler;
