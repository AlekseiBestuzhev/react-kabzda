import React, { useState } from 'react';
import './App.css';
import Block from "./components/Block";
import Accordion from "./components/Accordion";

function App() {
	const [list, setList] = useState(false);
	const menuToggle = () => {
		if (!list) setList(true);
		else setList(false);
	}
	return (
		<div className="App">
			<div className={'center-title'}>
				<h1>React App</h1>
				<p>This is some text witch rendered by react</p>
			</div>
			<Block title={'Episode One'} rate={4} />
			<Block title={'Episode Two'} rate={2} />
			<Accordion body={list} menuToggle={menuToggle} />
		</div>
	);
}


export default App;
