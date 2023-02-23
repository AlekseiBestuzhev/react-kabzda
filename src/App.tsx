import React, { useState } from 'react';
import './App.css';
import Block from "./components/Block";
import Accordion from "./components/Accordion";
import { Toggle } from './components/Toggle';
import { UncontrolledRate } from './components/UncontrolledRate/UncontrolledRate';

const App = () => {

	const [list, setList] = useState(false);
	const menuToggle = () => setList(!list);

	const [toggle, setToggle] = useState(true);
	const changeToggle = (mode: boolean) => setToggle(mode);

	return (
		<div className="App">
			<div className={'center-title'}>
				<h1>React App</h1>
				<p>This is some text witch rendered by react</p>
			</div>
			{/* <Block title={'Episode One'} rate={4} />
			<Block title={'Episode Two'} rate={2} /> */}
			{/* <UncontrolledRate title='Uncontrolled' /> */}
			<Accordion body={list} menuToggle={menuToggle} />
			<Toggle
				turnOn={toggle}
				changeToggle={changeToggle} />
		</div>
	);
}


export default App;
