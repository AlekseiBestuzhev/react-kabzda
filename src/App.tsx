import React, { useState } from 'react';
import './App.css';
import { Rating, RatingValueType } from "./components/Rating";
import Accordion from "./components/Accordion";
import { Toggle } from './components/Toggle/Toggle';
import { UncontrolledRate } from './components/UncontrolledRate/UncontrolledRate';

const App = () => {

	const [list, setList] = useState(false);
	const menuToggle = () => setList(!list);

	const [toggle, setToggle] = useState(true);
	const changeToggle = (mode: boolean) => setToggle(mode);

	const [rating, setRating] = useState<RatingValueType>(0);
	const changeRating = (rating: RatingValueType) => setRating(rating);

	return (
		<div className="App">
			<div className={'center-title'}>
				<h1>React App</h1>
				<p>This is some text witch rendered by react</p>
			</div>
			{/* <Block title={'Episode Two'} rate={2} /> */}
			{/* <UncontrolledRate title='Uncontrolled' /> */}
			<Rating
				title={'Episode One'}
				rating={rating}
				changeRating={changeRating} />
			<Accordion
				body={list}
				menuToggle={menuToggle} />
			<Toggle
				turnOn={toggle}
				changeToggle={changeToggle} />
		</div>
	);
}


export default App;
