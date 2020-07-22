import React from 'react';

export default function ProductoPedidoItem({ producto }) {
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='row'>
					<div className='col-xl-2 col-lg-2'>
						<img
							src={
								process.env.PUBLIC_URL +
								'source/producto/' +
								producto.imagen
							}
							className='img-fluid'
							alt='producto'
						/>
					</div>
					<div className='col-xl-6 col-lg-6 mb-3'>
						<h4>{producto.nombre}</h4>
						<span>Tipo: {producto.tipoProducto.nombre}</span>
						<br />
						<span>
							Estado: {producto.estado ? 'Vigente' : 'No Vigente'}
							, Precio: s/{producto.precio}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
