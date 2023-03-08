import { TrainInput } from './TrainInput';

export default {
	title: 'Train Input',
	component: TrainInput
}

export const Uncontrolled = () => <input />
export const Fixed = () => <input value={'fixed value'} />
