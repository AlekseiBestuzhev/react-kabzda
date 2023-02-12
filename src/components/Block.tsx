import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
display: flex;
column-gap: 10px;
`

const Picked = styled.span`
font-weight: 900;
color: #ffb300;

`
const NotPicked = styled.span`
color: #fff700;
font-weight: 400;
`

type BlockPropsType = {
	title?: string
	rate: number
}

function Block(props: BlockPropsType) {
	return (
		<div>
			<h3>{props.title}</h3>
			<Wrapper>
				<Star selected={props.rate > 0} />
				<Star selected={props.rate > 1} />
				<Star selected={props.rate > 2} />
				<Star selected={props.rate > 3} />
				<Star selected={props.rate > 4} />
			</Wrapper>
		</div>
	)
}

type StarPropsType = {
	selected: boolean
}
function Star(props: StarPropsType) {
	if (props.selected) return <Picked>Star</Picked>
	return <NotPicked>Star</NotPicked>
}

export default Block;