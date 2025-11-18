import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { QuestionArticle } from '../../types/domain';
import { fetchQuestions } from '../../services/questions';

export interface QuestionsState {
	items: QuestionArticle[];
	status: 'idle' | 'loading' | 'succeeded' | 'failed';
	error?: string;
}

const initialState: QuestionsState = {
	items: [],
	status: 'idle',
};

export const loadQuestions = createAsyncThunk('questions/load', async () => {
	const items = await fetchQuestions();
	return items;
});

const questionsSlice = createSlice({
	name: 'questions',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(loadQuestions.pending, state => {
				state.status = 'loading';
				state.error = undefined;
			})
			.addCase(loadQuestions.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.items = action.payload;
			})
			.addCase(loadQuestions.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message || 'Failed to load questions';
			});
	},
});

export default questionsSlice.reducer;


