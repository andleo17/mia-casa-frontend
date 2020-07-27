import React from 'react';
import ListaProductoPedido from '../components/Pedido/ListaProductoPedido';
import ListaPedido from '../components/Pedido/ListaPedido';

export default function Pedido({ match }) {
	const { numero } = match.params;

	return (
		<div className='col'>
			<h1>Seleccionar productos</h1>

			<div className='row p-3'>
				<ListaProductoPedido />

				<div className='col-lg-5'>
					<ListaPedido numero={numero} />
				</div>
			</div>
		</div>
	);
}
