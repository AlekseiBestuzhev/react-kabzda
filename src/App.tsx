import React, { useState } from 'react';
import './App.css';
import { Rating, RatingValueType } from "./components/Rating";
import Accordion from "./components/Accordion/Accordion";
import { Toggle } from './components/Toggle/Toggle';
import { CustomSelect } from './components/CustomSelect/CustomSelect';
//import { UncontrolledRate } from './components/UncontrolledRate/UncontrolledRate';

const App = () => {

	const [list, setList] = useState(false);
	const menuToggle = () => setList(!list);

	const [toggle, setToggle] = useState(true);
	const changeToggle = (mode: boolean) => setToggle(mode);

	const [rating, setRating] = useState<RatingValueType>(0);
	const changeRating = (rating: RatingValueType) => setRating(rating);

	const defaultArr = [
		{ title: 'Messages', value: 1 },
		{ title: 'Friends', value: 2 },
		{ title: 'Groups', value: 3 },
		{ title: 'Music', value: 4 }
	];

	const [selectedTitle, setSelectedTitle] = useState<string>('Select item from the list...');
	const onChangeHandler = (value: any) => {
		for (let item of defaultArr) {
			if (item.value === value) setSelectedTitle(item.title);
		}
	}

	return (
		<div className="App">
			<div className={'center-title'}>
				<h1>React App</h1>
				<p>This is some text witch rendered by react</p>
			</div>
			{/* <Block title={'Episode Two'} rate={2} /> */}
			{/* <UncontrolledRate title='Uncontrolled' /> */}
			{/* <Rating title={'Episode One'} rating={rating} changeRating={changeRating} />
			<Accordion body={list} menuToggle={menuToggle} onClick={alert} />
			<Toggle turnOn={toggle} changeToggle={changeToggle} /> */}
			<CustomSelect onChange={onChangeHandler} value={selectedTitle} items={defaultArr} />
		</div>
	);
}


export default App;
