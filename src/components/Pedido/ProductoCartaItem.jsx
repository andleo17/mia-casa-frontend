import React, { useState } from 'react';

export default function ProductoCartaItem({ producto, agregar, eliminar }) {
	const [cantidad, setCantidad] = useState(0);
	const cambiarCantidad = (accion) => {
		if (accion === '-') {
			const cantidadNueva = cantidad - 1;
			if (cantidadNueva >= 0) {
				setCantidad(cantidadNueva);
				agregar({
					producto: producto.id,
					precio: producto.precio,
					cantidad: cantidadNueva,
				});
			}
			if (cantidadNueva === 0) eliminar(producto.id);
		} else {
			const cantidadNueva = cantidad + 1;
			agregar({
				producto: producto.id,
				precio: producto.precio,
				cantidad: cantidadNueva,
			});
			if (cantidadNueva <= producto.cantidad) setCantidad(cantidadNueva);
		}
	};
	return (
		<div className='card mb-3 listaBorde col-lg-12'>
			<div className='card-body'>
				<div className='d-flex justify-content-around flex-wrap'>
					<div className='col-lg-2'>
						<img
							src={
								process.env.PUBLIC_URL +
								'/source/producto/' +
								producto.imagen
							}
							className='img-fluid'
							alt='producto'
						/>
					</div>
					<div className='col-lg-4'>
						<h5 className='colorLetra'>{producto.nombre}</h5>
						<span>Precio: s/{producto.precio}</span>
					</div>
					<div className='col-lg-4 control-pedido'>
						<button
							type='button'
							className='btn-circuloverde'
							onClick={() => cambiarCantidad('-')}>
							<i className='fa fa-minus m-0' />
						</button>
						<input
							type='number'
							className='form-control'
							min='0'
							max={producto.cantidad}
							value={cantidad}
							onChange={(e) =>
								setCantidad(parseInt(e.target.value) || 0)
							}
						/>
						<button
							type='button'
							className='btn-circuloverde'
							onClick={() => cambiarCantidad('+')}>
							<i className='fa fa-plus' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
