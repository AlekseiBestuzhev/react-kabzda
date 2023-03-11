import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { useState } from 'react';
import Accordion from './Accordion';


export default {
	title: 'Accordion',
	component: Accordion,
	argTypes: {
		menuToggle: { action: 'Try to hide or show' },
		onClick: { action: 'You clicked on list item' }
	}
} as ComponentMeta<typeof Accordion>;

const actionShow = action('List show or hide');
const actionItemClick = action('You clicked on list item');

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Component: ComponentStory<typeof Accordion> = (args) => {
	const [body, setBody] = useState<boolean>(false);
	const setList = () => {
		setBody(!body);
		actionShow();
	}
	const onClickHandler = (id: number) => {
		alert(`You clicked on item with ID: ${id}`);
		actionItemClick();
	}
	return (
		<Accordion
			body={body}
			menuToggle={setList}
			title={'Click on me'}
			onClick={onClickHandler} />
	)
};

export const FixedShowList = Template.bind({});
FixedShowList.args = {
	body: true,
	title: 'Show list'
};

export const FixedHideList = Template.bind({});
FixedHideList.args = {
	body: false,
	title: 'Hide list'
};

export const PassedTitle = Template.bind({});
PassedTitle.args = {
	body: true,
	title: 'Title passed by props as previous'
};

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
	body: true
};

export const PassedItems = Template.bind({});
PassedItems.args = {
	body: true,
	title: 'Items passed by props',
	items: [
		{ title: 'Peace', value: 1 },
		{ title: 'Door', value: 2 },
		{ title: 'Ball', value: 3 }
	]
};

export const DefaultItems = Template.bind({});
DefaultItems.args = {
	body: true,
	title: 'Using default items'
};