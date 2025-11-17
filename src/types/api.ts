export interface ApiImage {
	id: number;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: unknown | null;
	hash: string;
ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: unknown | null;
	createdAt: string;
	updatedAt: string;
}

export interface ApiCategory {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	title: string;
	rank: number;
	image: ApiImage;
}

export interface ApiCategoriesResponse {
	data: ApiCategory[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

export interface ApiQuestion {
	id: number;
	title: string;
	subtitle: string;
	image_uri: string;
	uri: string;
	order: number;
}


