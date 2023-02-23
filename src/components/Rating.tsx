import React, { FC } from "react";
import styled from "styled-components";
import cls from './UncontrolledRate/UncontrolledRate.module.css'

const Wrapper = styled.div`
display: flex;
column-gap: 10px;
`

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type BlockPropsType = {
	title?: string,
	rating: RatingValueType,
	changeRating: (rating: RatingValueType) => void
}

export const Rating: FC<BlockPropsType> = ({ title, rating, changeRating }) => {
	return (
		<div>
			<h3>{title}</h3>
			<Wrapper>
				<Star selected={rating > 0} rating={1} changeRating={changeRating} />
				<Star selected={rating > 1} rating={2} changeRating={changeRating} />
				<Star selected={rating > 2} rating={3} changeRating={changeRating} />
				<Star selected={rating > 3} rating={4} changeRating={changeRating} />
				<Star selected={rating > 4} rating={5} changeRating={changeRating} />
			</Wrapper>
		</div>
	)
}

type StarPropsType = {
	selected: boolean,
	rating: RatingValueType,
	changeRating: (rating: RatingValueType) => void
}

const Star = (props: StarPropsType): JSX.Element => {

	const onClickChangeRating = () => props.changeRating(props.rating);

	return (
		<div
			onClick={onClickChangeRating}
			className={`${cls.star} ${props.selected ? cls.selected : ''}`}></div>
	)
}