import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter({
			edge: false,
			external: [],
			split: false
		})
	}
};
