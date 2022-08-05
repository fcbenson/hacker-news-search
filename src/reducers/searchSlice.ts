import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Result} from '../interfaces/search_results';

// Define a type for the slice state
interface SearchState {
  currentSearch: string
  pastSearches: Array<String>
  searchResult: Result
}

const emptySearchResult: Result = {
	hits: [],
	nbHits: 0,
	page: 0,
	nbPages: 0,
	hitsPerPage: 0,
	exhaustiveNbHits: false,
	exhaustiveTypo: false,
	query: '',
	params: '',
	processingTimeMS: 0,
	processingTimingsMS: {
		afterSearch: {
			total: 0,
		},
		total: 0,
	},
};

// Define the initial state using that type
const initialState: SearchState = {
	currentSearch: '',
	pastSearches: [],
	searchResult: emptySearchResult,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		saveSearch: (state: SearchState, action: PayloadAction<string>) => {
			state.currentSearch = action.payload;
		},
		search: (state: SearchState) => {
			state.pastSearches = [...state.pastSearches, state.currentSearch];
		},
		saveResults: (state: SearchState, action: PayloadAction<Result>) => {
			state.searchResult = action.payload;
		},
		clearSearch: (state: SearchState) => {
			state.currentSearch = '';
			state.searchResult = emptySearchResult;
		},
		clearHistory: (state: SearchState) => {
			state.pastSearches = [];
		},
	},
});

export const {saveSearch, search, saveResults, clearSearch, clearHistory} = searchSlice.actions;

export default searchSlice.reducer;
