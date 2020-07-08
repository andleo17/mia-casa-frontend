import React, { useState, useEffect } from 'react';

export default function MesaPedidoItem({ mesa }) {
	const [ocupado, setOcupado] = useState(0);

	useEffect(() => {
		if (mesa.pedidoActual) {
			const pedidosCompletos = mesa.pedidoActual.productos.every(
				(p) => p.entregado
			);
			if (pedidosCompletos) {
				setOcupado(2);
			} else {
				setOcupado(1);
			}
		} else {
			setOcupado(0);
		}
	}, [mesa.pedidoActual]);

	return (
		<div className='col-4 mesa-pedido'>
			<div
				className={`card text-white ${
					ocupado === 0
						? 'libre'
						: ocupado === 1
						? 'pendiente'
						: 'ocupado'
				}`}>
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
			</div>
		</div>
	);
}
