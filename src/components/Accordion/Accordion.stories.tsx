import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from 'react';
import Accordion from './Accordion';


export default {
	title: 'Accordion',
	component: Accordion,
	argTypes: {
		menuToggle: { action: 'Try to hide or show' }
	}
} as ComponentMeta<typeof Accordion>;

const actionShow = action('List show or hide');

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Component: ComponentStory<typeof Accordion> = (args) => {
	const [body, setBody] = useState<boolean>(false);
	const setList = () => {
		setBody(!body);
		actionShow();
	}
	return (
		<Accordion
			body={body}
			menuToggle={setList}
			title={'Click on me'} />
	)
};

export const FixedTrue = Template.bind({});
FixedTrue.args = {
	body: true,
	title: 'Title passed by props'
};

export const FixedFalse = Template.bind({});
FixedFalse.args = {
	body: false
};