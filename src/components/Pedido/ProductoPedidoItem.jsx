import React from 'react';

export default function ProductoPedidoItem({ producto }) {
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='d-flex justify-content-around flex-wrap'>
					<div className='col-xl-2 col-lg-2'>
						<img
							src={
								process.env.PUBLIC_URL +
								"source/producto/" +
								producto.imagen
							}
							className='img-fluid'
							alt='producto'
						/>
					</div>
					<div className='col-xl-4 col-lg-4 mb-3'>
						<h4>{producto.nombre}</h4>
						<span>Tipo: {producto.tipoProducto.nombre}</span>
						<br />
						<span>
							Estado: {producto.estado ? 'Vigente' : 'No Vigente'}
							, Precio: s/{producto.precio}
						</span>
					</div>
					<div className='col-lg-3'>
						<div className='  d-flex justify-content-around flex-wrap '>
							<button
								type='button'
								className=' btn border-0 rounded-circle p-2'
								style={{ background: '#BFE6E0', width:'50px' }}>
								<i className='fa fa-plus m-0' />
							</button>
							<button className='btn border-0 rounded-circle p-2' style={{ background: '#BFE6E0', width:'50px'  }}>
								<i className='fa fa-minus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
