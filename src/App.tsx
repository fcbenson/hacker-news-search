import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from './common/Home';
import Search from './common/Search';
import History from './common/History';
import Error from './common/Error';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="search" element={<Search />} />
					<Route path="history" element={<History />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
