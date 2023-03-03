import { useState } from 'react';
import { Toggle } from './Toggle';
import '../../App.css'

export default {
	title: 'Toggle',
	component: Toggle
};

export const Prototype = () => {
	// Sets the hooks for both the label and primary props
	const [toggle, setToggle] = useState(false);

	return <Toggle turnOn={toggle} changeToggle={setToggle} />;
};