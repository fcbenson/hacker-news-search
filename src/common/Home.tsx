import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';
export default function Home() {
	return (
		<div className="App">
			<h1>Home</h1>
			<div className="homeLinks">
				<Link to="/search">Search Hacker News</Link>
				<Link to="/history">View Search History</Link>
				<Link to="/nothing">404 Error Page</Link>
			</div>
		</div>
	);
}
