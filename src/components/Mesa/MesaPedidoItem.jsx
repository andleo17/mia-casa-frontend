import React, { useState } from 'react';

export default function MesaPedidoItem({ mesa }) {
	const [ocupado] = useState(mesa.ocupado);

	const hallarColor = () => {
		if (ocupado) {
			return 'bg-success';
		} else {
			const pedidosCompletos = mesa.pedidoActual.productos.every(
				(p) => p.entregado
			);
			if (pedidosCompletos) {
				return 'bg-warning';
			} else {
				return 'bg-danger';
			}
		}
	};

	return (
		<div className='col-4'>
			<div className={`card ${hallarColor()}`}>
				<div className='card-body'>
					<span className='card-title'>{`Mesa ${mesa.numero}`}</span>
					<ul>
						{mesa.pedidoActual.productos.map((p) => (
							<li
								key={
									p.producto.id
								}>{`${p.cantidad} ${p.producto.nombre}`}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
