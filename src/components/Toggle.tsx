import React from 'react';
import cls from './Toggle.module.css'

type ToggleType = {
	turnOn: boolean
}

export const Toggle = (props: ToggleType) => {

	return (
		<div className='homework5'>
			<div className='box' >on
				{props.turnOn && <div className={cls.on}></div>}
			</div>
			<div className='box' >off
				{!props.turnOn && <div className={cls.off}></div>}
			</div>
			<div id='lamp'>
				{props.turnOn && <div className={cls.on}></div>}
				{!props.turnOn && <div className={cls.off}></div>}
			</div>
		</div>
	);
}