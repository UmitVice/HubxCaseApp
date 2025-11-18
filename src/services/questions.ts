import httpClient from './httpClient';
import { ApiQuestion } from '../types/api';
import { QuestionArticle } from '../types/domain';

export async function fetchQuestions(): Promise<QuestionArticle[]> {
	const response = await httpClient.get<ApiQuestion[]>('/getQuestions');
	return response.data
		.sort((a, b) => a.order - b.order)
		.map(q => ({
			id: q.id,
			title: q.title,
			subtitle: q.subtitle,
			imageUri: q.image_uri,
			uri: q.uri,
			order: q.order,
		}));
}


