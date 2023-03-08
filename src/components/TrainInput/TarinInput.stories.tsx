import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TrainInput } from './TrainInput';

export default {
	title: 'Train Input',
	component: TrainInput
} as ComponentMeta<typeof TrainInput>;

const Template: ComponentStory<typeof TrainInput> = (args) => <TrainInput {...args} />;

export const Uncontrolled = Template.bind({});


export const Fixed = Template.bind({});

Fixed.args = {
	value: 'fixed value'
};