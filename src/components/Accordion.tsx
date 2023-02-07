import React from "react";

type AccordionPropsType = {
	body: boolean
}

function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle />
			{props.body && <AccordionBody />}
		</div>
	)
}

function AccordionTitle() {
	return (
		<>
			<h3>Menu</h3>
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