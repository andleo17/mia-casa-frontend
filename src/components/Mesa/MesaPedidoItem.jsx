import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function MesaPedidoItem({ mesa }) {
	const [estado, setEstado] = useState('libre');

	useEffect(() => {
		if (mesa.pedidoActual) {
			const pedidosCompletos = mesa.pedidoActual.productos.every(
				(p) => p.entregado
			);
			if (pedidosCompletos) {
				setEstado('ocupado');
			} else {
				setEstado('pendiente');
			}
		} else {
			setEstado('libre');
		}
	}, [mesa.pedidoActual]);

	return (
		<div className='col-4 mesa-pedido'>
			<NavLink
				className={`card text-white ${estado}`}
				to={`/mesa/${mesa.id}`}>
				<div className='card-body'>
					<span className='card-title font-weight-bold'>
						Mesa {mesa.numero}
					</span>
					{mesa.pedidoActual && (
						<table className='table table-sm mt-3'>
							<thead>
								<tr>
									<th>Cantidad</th>
									<th>Producto</th>
									<th>Precio</th>
								</tr>
							</thead>
							<tbody>
								{mesa.pedidoActual.productos.map((p) => (
									<tr key={p.producto.id}>
										<td>{p.cantidad}</td>
										<td>{p.producto.nombre}</td>
										<td>{p.precio}</td>
									</tr>
								))}
								<tr>
									<td colSpan='2'>Total</td>
									<td>
										{mesa.pedidoActual.productos.reduce(
											(p1, p2) =>
												(
													p1.precio + p2.precio
												).toString()
										)}
									</td>
								</tr>
							</tbody>
						</table>
					)}
				</div>
			</NavLink>
		</div>
	);
}
