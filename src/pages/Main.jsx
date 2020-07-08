import React from 'react';
import Clock from '../components/Main/Clock';

export default function Main() {
	return (
		<div className='main'>
			<h1 className='display-1'>Bienvenido</h1>
			<div className='text-right'>
				<Clock />
			</div>
		</div>
	);
}
