import { useState } from 'react';
import { Toggle } from './Toggle';
import '../../App.css'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
// setValue={action('Value is changed')}


export default {
	title: 'Toggle',
	component: Toggle,
	argTypes: { changeToggle: { action: 'clicked' } }
} as ComponentMeta<typeof Toggle>;

export const ToggleComponent: ComponentStory<typeof Toggle> = () => {
	const [toggle, setToggle] = useState<boolean>(true);

	return <Toggle turnOn={toggle} changeToggle={setToggle} />
};

export const TurnOff: ComponentStory<typeof Toggle> = (args) => {
	return <Toggle {...args} turnOn={false} />;
};

export const TurnOn: ComponentStory<typeof Toggle> = () => {
	return <Toggle turnOn={true} changeToggle={action('try to change toggle value')} />;
};