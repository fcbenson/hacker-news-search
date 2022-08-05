import React from 'react';
import {render, screen} from '@testing-library/react';
import History from './History';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';

beforeEach(() => {
	render(
		<MemoryRouter>
			<Provider store={store}>
				<History />
			</Provider>
		</MemoryRouter>,
	);
});

test('Check History Header', () => {
	const header = screen.getByText(/^Search History$/);
	expect(header).toBeInTheDocument();
});

test('Check History Page', () => {
	const clearHistoryLink = screen.getByText(/^clear search history$/i);
	const backLink = screen.getByText(/^Back to Search$/);
	const homeLink = screen.getByText(/^Home$/);
	expect(clearHistoryLink && homeLink && backLink).toBeInTheDocument();
});
