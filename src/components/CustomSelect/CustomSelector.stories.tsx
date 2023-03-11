import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { useState } from 'react';
import { CustomSelect } from './CustomSelect';

export default {
	title: 'Custom beautiful select',
	component: CustomSelect,
} as ComponentMeta<typeof CustomSelect>;

const actionItemClick = action('You choose new value for select');

export const Component: ComponentStory<typeof CustomSelect> = (args) => {

	const defaultArr = [
		{ title: 'Messages', value: 1 },
		{ title: 'Friends', value: 2 },
		{ title: 'Groups', value: 3 },
		{ title: 'Music', value: 4 }
	];

	const [selectedTitle, setSelectedTitle] = useState<string>('Select item from the list...');
	const onChangeHandler = (value: any) => {
		for (let item of defaultArr) {
			if (item.value === value) {
				setSelectedTitle(item.title);
				actionItemClick();
			}
		}
	}

	return (
		<CustomSelect
			onChange={onChangeHandler}
			value={selectedTitle}
			items={defaultArr} />
	)
};

// const Template: ComponentStory<typeof CustomSelect> = (args) => <CustomSelect {...args} />;
// export const FixedShowList = Template.bind({});
// FixedShowList.args = {};