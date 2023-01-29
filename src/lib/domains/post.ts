export interface PostDataSummary {
	slug: string;
	title: string;
	category: string;
	tags: string[];
	createdAt: Date;
	updatedAt: Date;
}

export interface PostData extends PostDataSummary {
	content: string;
}
