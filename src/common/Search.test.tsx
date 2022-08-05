import React from 'react';
import {render, screen} from '@testing-library/react';
import Search from './Search';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';

beforeEach(() => {
	render(
		<MemoryRouter>
			<Provider store={store}>
				<Search />
			</Provider>
		</MemoryRouter>,
	);
});

test('Check Search Header', () => {
	const header = screen.getByRole('heading');
	expect(header).toHaveTextContent('Search');
});

test('Check Search Page', () => {
	const clearSearchLink = screen.getByText(/^clear$/i);
	const viewHistory = screen.getByText(/^View Search History$/);
	const homeLink = screen.getByText(/^Home$/);
	expect(clearSearchLink && homeLink && viewHistory).toBeInTheDocument();
	const searchButton = screen.getByRole('button');
	expect(searchButton).toHaveTextContent('Search');
});
