import React from 'react';
import {render, screen} from '@testing-library/react';
import Error from './Error';
import {MemoryRouter} from 'react-router-dom';

beforeEach(() => {
	render(
		<MemoryRouter>
			<Error />
		</MemoryRouter>,
	);
});

test('Check Error Header', () => {
	const header = screen.getByText(/Error/);
	expect(header).toBeInTheDocument();
});

test('Check Error Page', () => {
	const myBadText = screen.getByText(/^my bad$/i);
	const homeLink = screen.getByText(/^Home$/);
	expect(myBadText && homeLink).toBeInTheDocument();
});
