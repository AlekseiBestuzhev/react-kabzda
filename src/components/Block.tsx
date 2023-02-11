import React from "react";
import styled from "styled-components";

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
	if (props.selected) return <span><b>Star</b> </span>
	return <span>Star </span>
}

const Wrapper = styled.div`
color: #ffb300;
`

export default Block;