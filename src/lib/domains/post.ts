export interface PostDataSummary {
	slug: string;
	title: string;
	createdAt: Date;
}

export interface PostData extends PostDataSummary {
	content: string;
}
