import React from 'react';

export default function ProductoCartaItem({ producto }) {
	return (
		<div className='card mb-3 listaBorde row'>
			<div className='card-body'>
				<div className='d-flex justify-content-around flex-wrap'>
					<div className='col-lg-2'>
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
					<div className='col-lg-4'>
						<h5 className='colorLetra'>{producto.nombre}</h5>
						<span>
							{/* Estado: {producto.estado ? 'Vigente' : 'No Vigente'} */}
							 Precio: s/{producto.precio}
						</span>
					</div>
					<div className='col-lg-4 mt-3  d-flex justify-content-around flex-wrap'>
						<div className='row'>
							<button
								type='button'
								className=' btn border-0 rounded-circle circuloverde p-2'
								style={{ background: '#BFE6E0'}}>
								<i className='fa fa-minus m-0' />
							</button>
							<input type="number" name="" id="" className='form-control' style={{width:'40%'}} />
							<button className='btn border-0 rounded-circle p-2 circuloverde m-0' style={{ background: '#BFE6E0'  }}>
								<i className='fa fa-plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
