import React from "react";

type AccordionPropsType = {
	body: boolean,
	menuToggle: () => void
}

function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle menuToggle={props.menuToggle} />
			{props.body && <AccordionBody />}
		</div>
	)
}

type AccordionTitleType = {
	menuToggle: () => void
}

function AccordionTitle(props: AccordionTitleType) {
	return (
		<>
			<h3 className="accordion-button" onClick={() => { props.menuToggle() }}>Menu</h3>
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