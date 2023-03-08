import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { ChangeEvent, useState } from 'react';
import { TrainInput } from './TrainInput';

export default {
	title: 'Train Input',
	component: TrainInput,
	argTypes: {
		onChange: { action: 'Value is changing' }
	}
} as ComponentMeta<typeof TrainInput>;

const actionShow = action('Value is changing');

const Template: ComponentStory<typeof TrainInput> = (args) => <TrainInput {...args} />;

export const Uncontrolled = Template.bind({});

export const Fixed = Template.bind({});
Fixed.args = {
	value: 'fixed value'
};

export const Controlled: ComponentStory<typeof TrainInput> = (args) => {

	const [value, setValue] = useState<string>('');
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		actionShow();
		setValue(e.currentTarget?.value);
	}

	return (
		<TrainInput
			{...args}
			value={value}
			onChange={onChangeHandler} />
	)
}
