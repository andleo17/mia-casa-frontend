import React, { useState } from 'react';

export default function MesaPedidoItem({ mesa }) {
	const [ocupado] = useState(mesa.ocupado);

	const hallarColor = () => {
		if (!ocupado) {
			return 'libre';
		} else {
			const pedidosCompletos = mesa.pedidoActual.productos.every(
				(p) => p.entregado
			);
			if (pedidosCompletos) {
				return 'ocupado';
			} else {
				return 'pendiente';
			}
		}
	};

	return (
		<div className='col-4 mesa-pedido'>
			<div className={`card text-white ${hallarColor()}`}>
				<div className='card-body'>
					<span className='card-title font-weight-bold'>{`Mesa ${mesa.numero}`}</span>
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
