import React from 'react';
import cls from './Toggle.module.css'

type ToggleType = {
	turnOn: boolean,
	changeToggle: (mode: boolean) => void
}

export const Toggle: React.FC<ToggleType> = ({ turnOn, changeToggle }) => {

	return (
		<div className='homework5'>
			<div className={`box ${turnOn ? cls.on : ''}`} onClick={() => changeToggle(true)}>on</div>
			<div className={`box ${turnOn ? '' : cls.off}`} onClick={() => changeToggle(false)}>off</div>
			<div id='lamp' className={`${turnOn ? cls.on : cls.off}`}></div>
		</div>
	);
}