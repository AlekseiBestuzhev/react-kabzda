import { title } from "process";
import React from "react";

type AccordionPropsType = {
	title?: string,
	body: boolean,
	menuToggle: () => void,
	items?: string[]
}

function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle
				title={props.title}
				menuToggle={props.menuToggle} />
			{props.body && <AccordionBody items={props.items} />}
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

type AccordionBodyType = {
	items?: string[]
}

function AccordionBody(props: AccordionBodyType) {

	const defaultArr = ['Messages', 'Friends', 'Groups', 'Music'];
	const displayData = props.items ? props.items : defaultArr;
	const itemCreator = displayData.map((elem, index) => {
		return (
			<li key={index}>{elem}</li>
		)
	})

	return (
		<ul>
			{itemCreator}
		</ul>
	)
}


export default Accordion;