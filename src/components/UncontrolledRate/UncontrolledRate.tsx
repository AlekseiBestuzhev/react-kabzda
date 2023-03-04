import React, { FC, useState } from "react";
import cls from './UncontrolledRate.module.css'

type UncontrolledRateValueType = 0 | 1 | 2 | 3 | 4 | 5;

type UncontrolledRateType = {
	title: string,
	onChange: (id: UncontrolledRateValueType) => void,
	defaultVlue?: UncontrolledRateValueType
}

export const UncontrolledRate: FC<UncontrolledRateType> = ({ title, defaultVlue, onChange }) => {

	const [rate, setRate] = useState<UncontrolledRateValueType>(defaultVlue ? defaultVlue : 0);

	const pickStar = (id: UncontrolledRateValueType) => {
		setRate(id);
		onChange(id);
	}

	return (
		<div>
			<h3>{title}</h3>
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
	id: UncontrolledRateValueType,
	pickStar: (id: UncontrolledRateValueType) => void
}

const Star = (props: StarPropsType): JSX.Element => {
	return (
		<div
			onClick={() => props.pickStar(props.id)}
			className={`${cls.star} ${props.selected ? cls.selected : ''}`}></div>
	)
}