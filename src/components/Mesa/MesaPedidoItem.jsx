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
						<ul>
							{mesa.pedidoActual.productos.map((p) => (
								<li
									key={
										p.producto.id
									}>{`${p.cantidad} ${p.producto.nombre}`}</li>
							))}
						</ul>
					)}
				</div>
			</NavLink>
		</div>
	);
}
