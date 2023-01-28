import { promises as fs } from 'fs';
import path from 'path';
import { unified } from 'unified';
import parse from 'remark-parse';
import frontmatter from 'remark-frontmatter';
import yaml from 'yaml';
import extractFrontmatter from 'remark-extract-frontmatter';
import gfm from 'remark-gfm';
import breaks from 'remark-breaks';
import emoji from 'remark-emoji';
import remark2rehype from 'remark-rehype';
import rehypePrism from '@mapbox/rehype-prism';
import html from 'rehype-stringify';

const processor = unified()
	.use(parse)
	.use(frontmatter)
	.use(extractFrontmatter, { yaml: yaml.parse })
	.use(gfm)
	.use(breaks)
	.use(emoji)
	.use(remark2rehype)
	.use(rehypePrism)
	.use(html);

const postsDirectory = path.join(process.cwd(), 'posts');

interface FrontMatter {
	title: string;
	created_at: string;
}

export interface PostDataSummary {
	slug: string;
	title: string;
	createdAt: string;
}

export interface PostData extends PostDataSummary {
	content: string;
}

let postsCache: PostData[];

const formatDate = (datetime: string): string => {
	const date = new Date(datetime);
	const y = date.getFullYear();
	const m = (date.getMonth() + 1).toString().padStart(2, '0');
	const d = date.getDate().toString().padStart(2, '0');

	return `${y}-${m}-${d}`;
};

const fetchPosts = async (): Promise<PostData[]> => {
	if (postsCache) {
		return postsCache;
	}

	const fileNames = await fs.readdir(postsDirectory);

	const jobs = fileNames
		.filter((it) => it.endsWith('.md'))
		.map(async (fileName) => {
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = await fs.readFile(fullPath, 'utf8');

			const result = await processor.process(fileContents);
			const { title, created_at } = result.data as unknown as FrontMatter;
			const content = result.value.toString();

			return {
				// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
				slug: fileName.match(/_(.+)\.md$/)?.[1]!,
				title,
				createdAt: formatDate(created_at),
				content
			};
		});

	const posts = await Promise.all(jobs);

	postsCache = posts.sort((a, b) => {
		if (a.createdAt < b.createdAt) {
			return 1;
		} else {
			return -1;
		}
	});

	return postsCache;
};

export const getPostSummaries = async (): Promise<PostDataSummary[]> => {
	const posts = await fetchPosts();
	return posts.map(({ ...summary }) => summary);
};

export const getPost = async (slug: string): Promise<PostData | undefined> => {
	const posts = await fetchPosts();
	return posts.find((post) => post.slug === slug);
};
