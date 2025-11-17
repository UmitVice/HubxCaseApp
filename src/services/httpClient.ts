import axios from 'axios';

const httpClient = axios.create({
	baseURL: 'https://dummy-api-jtg6bessta-ey.a.run.app',
	timeout: 10000,
});

httpClient.interceptors.response.use(
	response => response,
	error => {
		// Re-throw to be handled by callers
		return Promise.reject(error);
	},
);

export default httpClient;


