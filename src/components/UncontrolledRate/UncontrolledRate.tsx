import React, { useState } from "react";
import cls from './UncontrolledRate.module.css'

type UncontrolledRateType = {
	title: string
}

export const UncontrolledRate = (props: UncontrolledRateType) => {

	const [rate, setRate] = useState(3);

	const pickStar = (id: number) => {
		setRate(id);
	}

	return (
		<div>
			<h3>{props.title}</h3>
			<div>
				<Star selected={rate > 0} id={1} pickStar={pickStar} />
				<Star selected={rate > 1} id={2} pickStar={pickStar} />
				<Star selected={rate > 2} id={3} pickStar={pickStar} />
				<Star selected={rate > 3} id={4} pickStar={pickStar} />
				<Star selected={rate > 4} id={5} pickStar={pickStar} />
			</div>
		</div>
	)
}

type StarPropsType = {
	selected: boolean,
	id: number,
	pickStar: (id: number) => void
}

const Star = (props: StarPropsType): JSX.Element => {
	console.log('star');
	return (
		<div
			onClick={() => props.pickStar(props.id)}
			className={`${cls.star} ${props.selected ? cls.selected : ''}`}></div>
	)
}