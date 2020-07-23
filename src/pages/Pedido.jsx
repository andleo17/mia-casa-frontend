import React from 'react';
import ListaProductoPedido from '../components/Pedido/ListaProductoPedido';
import ListaPedido from '../components/Pedido/ListaPedido';

export default function Pedido() {
	return (
		<div className='col'>
			<h1>Seleccionar productos</h1>
			<div className='row p-3'>
				<ListaProductoPedido />

				<div  style={{ height: '350px' }}>
					<ListaPedido />
				</div>

			</div>
		</div>
		
		
	);
}
