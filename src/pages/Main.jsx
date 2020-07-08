import React from 'react';
import Clock from '../components/Main/clock';

export default function Main() {
	return (
		<div className='col mt-5'>
			<div className='row pl-5'>
				<h1>Bienvenido</h1>
			</div>
            <div className='row justify-content-end pr-5'>
                <Clock></Clock>
			</div>
		</div>
	);
}