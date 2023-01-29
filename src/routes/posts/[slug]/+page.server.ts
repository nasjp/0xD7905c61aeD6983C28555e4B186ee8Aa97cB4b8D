import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPost } from '$lib/usecases/posts';

export const load = (async ({ params }) => {
	const post = await getPost(params.slug);
	if (post) {
		return {
			post
		};
	}

	throw error(404, 'Not Found');
}) satisfies PageServerLoad;
