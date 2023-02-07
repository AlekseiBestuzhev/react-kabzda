import React from "react";

type BlockPropsType = {
	title?: string
	rate: number
}

function Block(props: BlockPropsType) {
	return (
		<div>
			<h3>{props.title}</h3>
			<Star selected={props.rate > 0} />
			<Star selected={props.rate > 1} />
			<Star selected={props.rate > 2} />
			<Star selected={props.rate > 3} />
			<Star selected={props.rate > 4} />
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

export default Block;