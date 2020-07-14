import React from 'react';
import ListaMesa from '../components/Mesa/ListaMesa';
import FrmMesa from '../components/Mesa/FrmMesa';

export const initialState = {
	__typename: 'Mesa',
	id: '',
	numero: '',
	ocupado: '',
	estado: '',
};

export default function Mesa() {
	return (
		<div className='col'>
			<div className='row p-3'>
				<ListaMesa />
			
				<FrmMesa 
			
				/>
			</div>
		</div>
	);
}
