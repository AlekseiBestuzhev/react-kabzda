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

	const [selectedTitle, setSelectedTitle] = useState<string>('Select item from the list...');

	return (
		<div className={c.component}>
			<div>{selectedTitle}</div>
		</div>
	);
}