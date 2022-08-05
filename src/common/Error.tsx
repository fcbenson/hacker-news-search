import React from 'react';
import {Link} from 'react-router-dom';

export default function Error() {
	return (
		<>
			<Link to="/" className='homeLink'>Home</Link>
			<h1>Error</h1>
			<h2>My Bad</h2>
			<img src="https://media.giphy.com/media/zrdUjl6N99nLq/giphy.gif" alt="angry panda"/>
		</>
	);
}
