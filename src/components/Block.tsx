import React from "react";
import styled, { DefaultTheme } from "styled-components";

declare module 'styled-components' {
	export interface DefaultTheme {
		fontWeight: number;
	}
}

const Wrapper = styled.div`
display: flex;
column-gap: 10px;
`

const Str = styled.span<DefaultTheme>`
color: #fff700;
font-weight: ${props => {
		if (props.fontWeight === 900) {
			return 900;
		} else {
			return 400;
		}
	}};
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
	return <Str fontWeight={props.selected === true ? 900 : 400}>Star</Str>
}

export default Block;