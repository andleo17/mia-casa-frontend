import React, { useState } from 'react';
import ListadoReclamo from '../components/Reclamo/ListaReclamo';
import ListadoPedidos from '../components/Reclamo/ListaPedido';
import NuevoReclamo from '../components/Reclamo/NuevoReclamo';

export const initialState = {
	__typename: 'Reclamo',
	id: '',
	motivo: '',
	detallePedido: {
		__typename: 'DetallePedido',
		producto: {
			__typename: 'Producto',
			id: '',
			nombre: '',
		},
		pedido: {
			__typename: 'Pedido',
			id: '',
			mesa: {
				__typename: 'Mesa',
				id: '',
				numero: '',
			},
			productos: [
				{
					__typename: 'DetallePedido',
					precio: '',
					producto: {
						__typename: 'Procucto',
						id: '',
						nombre: '',
					},
				},
			],
		},
	},
};

export const initialReclamo = {
	__typename: 'Reclamo',
	estado: '',
	id: '',
	numero: '',
};

export default function Reclamo() {
	const [selectedItem, setSelectedItem] = useState(initialState);
	return (
		<div className=' row mt-3 mb-3'>
			<div className='col-lg-7 '>
				<NuevoReclamo
					item={selectedItem}
					key={selectedItem.id}
					update={setSelectedItem}
					initial={initialState}
				/>
				<ListadoPedidos
					update={setSelectedItem}
					initial={initialState}
				/>
			</div>
			<div className='col-lg-5'>
				<ListadoReclamo
					update={setSelectedItem}
					initial={initialState}
				/>
			</div>
		</div>
	);
}
