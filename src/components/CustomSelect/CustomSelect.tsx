import { FC, useState } from "react";
import c from './CustomSelect.module.css';

type SelectItemType = {
	value: any,
	title: string
}

type CustomSelectType = {
	value: any,
	items: SelectItemType[],
	onChange: (value: any) => void
}

export const CustomSelect: FC<CustomSelectType> = (props) => {

	const [show, setShow] = useState<boolean>(false);

	const toggleList = () => setShow(!show);

	const itemCreator = props.items.map((elem, index) => {
		const setting = () => {
			props.onChange(elem.value);
			toggleList();
		}
		return (
			<li
				key={index}
				onClick={setting}
				className={c.item}
			>{elem.title}</li>
		)
	});

	return (
		<div className={c.component}>
			<div
				onClick={toggleList}
				className={c.main}>{props.value}</div>
			{show && itemCreator}
		</div>
	);
}