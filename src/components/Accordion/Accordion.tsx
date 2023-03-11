import { title } from "process";
import React from "react";

type AccordionPropsType = {
	title?: string,
	body: boolean,
	menuToggle: () => void
}

function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle title={props.title} menuToggle={props.menuToggle} />
			{props.body && <AccordionBody />}
		</div>
	)
}

type AccordionTitleType = {
	title?: string,
	menuToggle: () => void
}

function AccordionTitle(props: AccordionTitleType) {

	const title = props.title ? props.title : 'Please, set title';

	return (
		<>
			<h3
				className="accordion-button"
				onClick={() => { props.menuToggle() }}>{title}</h3>
		</>
	)
}

function AccordionBody() {
	return (
		<ul>
			<li>Messages</li>
			<li>Friends</li>
			<li>Groups</li>
			<li>Music</li>
		</ul>
	)
}


export default Accordion;