type ItemType = {
	title: string,
	value: any
}

type AccordionPropsType = {
	title?: string,
	body: boolean,
	menuToggle: () => void,
	items?: ItemType[],
	onClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {
	return (
		<div>
			<AccordionTitle
				title={props.title}
				menuToggle={props.menuToggle} />
			{props.body && <AccordionBody items={props.items} onClick={props.onClick} />}
		</div>
	)
}

type AccordionTitleType = {
	title?: string,
	menuToggle: () => void,
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
	items?: ItemType[],
	onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyType) {

	const defaultArr = [
		{ title: 'Messages', value: 1 },
		{ title: 'Friends', value: 2 },
		{ title: 'Groups', value: 3 },
		{ title: 'Music', value: 4 }
	];

	const displayData = props.items ? props.items : defaultArr;
	const itemCreator = displayData.map((elem, index) => {
		return (
			<li
				key={index}
				onClick={() => props.onClick(elem.value)}
			>{elem.title}</li>
		)
	})

	return (
		<ul>
			{itemCreator}
		</ul>
	)
}


export default Accordion;