import React, { useState } from 'react';
import ListaMesa from '../components/Mesa/ListaMesa';
import FrmMesa from '../components/Mesa/FrmMesa';

//Faltan comentarios

export const initialState = {
	__typename: 'Mesa',
	estado: '',
	id: '',
	numero: ''
};

export default function Mesa() {
	const [selectedItem, setSelectedItem] = useState(initialState);
	return (
		<div className='col'>
			<div className='row p-3'>
				<ListaMesa 
					update={setSelectedItem}
					initial={initialState}
				/>
			
				<FrmMesa 
					item={selectedItem} 
					key={selectedItem.id}
					update={setSelectedItem}
					initial = {initialState}
				/>
			</div>
		</div>
	);
}
