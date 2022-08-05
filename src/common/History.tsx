import React from 'react';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {clearHistory} from '../reducers/searchSlice';
import {Link} from 'react-router-dom';

export default function History() {
	const dispatch = useAppDispatch();
	const pastSearches: Array<String> = useAppSelector((state) => state.search.pastSearches);
	function clear() {
		dispatch(clearHistory());
	}
	return (
		<>
			<Link to="/" className='homeLink'>Home</Link>
			<h1>Search History</h1>
			<ul>
				{
					pastSearches.map((search, index) => (
						<li key={index}>{search}</li>
					))
				}
			</ul>
			<Link to="/search">Back to Search</Link>
			<a onClick={clear} className="clearInfo">Clear Search History</a>
		</>
	);
}
