import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('Check Home Header', () => {
	render(<App />);
	const header = screen.getByText(/Home/i);
	expect(header).toBeInTheDocument();
});

test('Check home links', () => {
	render(<App />);
	const searchLink = screen.getByText(/^Search Hacker News$/);
	const historyLink = screen.getByText(/^View Search History$/);
	const errorLink = screen.getByText(/^404 Error Page$/);
	expect(searchLink && historyLink && errorLink).toBeInTheDocument();
});
