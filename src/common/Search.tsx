import React, {ReactNode} from 'react';
import '../styles/search.css';
import {useAppSelector, useAppDispatch} from '../store/hooks';
import {saveResults, saveSearch, search, clearSearch} from '../reducers/searchSlice';
import {Link} from 'react-router-dom';
import {Result, Hit} from '../interfaces/search_results';
import datetimeDifference from 'datetime-difference';

export default function Search() {
	const dispatch = useAppDispatch();
	const currentSearch = useAppSelector((state) => state.search.currentSearch);
	const searchResults: Result = useAppSelector((state) => state.search.searchResult);

	function searchHackerNews() {
		dispatch(search());

		fetch(`http://hn.algolia.com/api/v1/search?query=${currentSearch}&tags=story`)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log(result);
					dispatch(saveResults(result));
				},
				(error) => {
					console.log(error);
				},
			);
	}

	function onKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		if (event.key === 'Enter') {
			searchHackerNews();
		}
	}

	function articleAge(created: string): ReactNode {
		const result = datetimeDifference(new Date(created), new Date);
		let age = '';
		if (result.years > 0) {
			age += `${result.years} years `;
		}
		if (result.months > 0) {
			age += `${result.months} months `;
		}
		if (result.days > 0) {
			age += `${result.days} days`;
		}
		return <>{age}</>;
	}

	function clear() {
		dispatch(clearSearch());
	}

	const yCombinatorURL = 'https://news.ycombinator.com/item?id=';
	const hits: Array<Hit> = searchResults.hits;
	const resultsDisplay = 	hits.map((hit: Hit, index) => (
		<li key={index} className="articleHit">
			<div>
				<span className='title'>{hit.title}</span>
				<span className='url'>(<a target="_blank" href={hit.url} rel="noreferrer">{hit.url}</a>)</span>
			</div>
			<div className='meta'>
				<span><a target="_blank" href={yCombinatorURL+hit.objectID} rel="noreferrer">{hit.points.toString()}</a></span>
				<span className="separator">|</span>
				<span><a target="_blank" href={yCombinatorURL+hit.author} rel="noreferrer">{hit.author}</a></span>
				<span className="separator">|</span>
				<span><a target="_blank" href={yCombinatorURL+hit.objectID} rel="noreferrer">{articleAge(hit.created_at)}</a></span>
				<span className="separator">|</span>
				<span><a target="_blank" href={yCombinatorURL+hit.objectID} rel="noreferrer">{`${hit.num_comments} comments`}</a></span>
			</div>
		</li>
	));

	const searchResultsText = hits.length > 0 ? <h4>{`Search results for '${currentSearch}'`}</h4> : null;

	return (
		<>
			<Link to="/" className='homeLink'>Home</Link>
			<h1>Search</h1>
			<input placeholder="Search Hacker News"
				onChange={(event) => dispatch(saveSearch(event.target.value))}
				onKeyDown={(event) => onKeyDown(event)}
				value={currentSearch}
			/>
			<button onClick={searchHackerNews} className="searchButton">Search</button>
			<a onClick={clear} className="clearInfo">Clear</a>
			{searchResultsText}
			<ul className="results">{resultsDisplay}</ul>
			<Link to="/history">View Search History</Link>
		</>
	);
}
