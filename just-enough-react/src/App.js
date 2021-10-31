import React from 'react';
import './App.css';

import Sparkle from './Sparkle';

function App() {
	const name = 'Adam';
	let now = String(new Date());
	return (
		<div className="App">
		<p>Hello {name}!</p>
		<p>The current time is {now}</p>
		<p>Two plus tow is {2+2}</p>
		<Sparkle/>
		</div>
	);
}

export default App;