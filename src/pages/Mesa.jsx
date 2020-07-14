import React from 'react';
import ListaMesa from '../components/Mesa/ListaMesa';
import FrmMesa from '../components/Mesa/FrmMesa';

//Faltan comentarios
export default function Mesa() {
	return (
		<div className='col'>
			<div className='row p-3'>
				<ListaMesa />
			
				<FrmMesa />
			</div>
		</div>
	);
}
