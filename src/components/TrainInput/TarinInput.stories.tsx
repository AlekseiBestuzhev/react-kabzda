import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import { ChangeEvent, useRef, useState } from 'react';
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
		<>
			<TrainInput
				{...args}
				value={value}
				onChange={onChangeHandler} />
			value - {value}
		</>
	)
}

export const ReferalControl: ComponentStory<typeof TrainInput> = (args) => {

	const [value, setValue] = useState<string>('');
	const valueRef = useRef<HTMLInputElement>(null);

	const onClickHandler = () => {
		const inputText = valueRef.current as HTMLInputElement;
		setValue(inputText.value)
	}
	return (
		<>
			<input ref={valueRef} />
			<button onClick={onClickHandler}>add</button>
			value - {value}
		</>
	)
}

export const ControlledCheckbox: ComponentStory<typeof TrainInput> = (args) => {

	const [value, setValue] = useState<boolean>(false);
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		actionShow();
		setValue(e.currentTarget.checked);
	}

	return (
		<>
			<TrainInput
				{...args}
				type={'checkbox'}
				checked={value}
				onChange={onChangeHandler} />
			Is it checked? - {value.toString()}
		</>
	)
}

export const ControlledSelect: ComponentStory<typeof TrainInput> = (args) => {

	const [value, setValue] = useState<string>('');
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		actionShow();
		setValue(e.currentTarget.value);
	}

	return (
		<>
			<select value={value} onChange={onChangeHandler}>
				<option value='' disabled selected hidden>Select city</option>
				<option value="1">Krasnodar</option>
				<option value="2">Kaliningrad</option>
				<option value="3">Ust-Labinsk</option>
			</select>
			Selected value's id is - {value}
		</>
	)
}

