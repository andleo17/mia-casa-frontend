import React from 'react';

export default function ProductoPedidoItem({detallePedido}) {
	return (
		<div className='card mb-3 listaBorde ' >
            <div className='card-body'>
                <div className='d-flex justify-content-around flex-wrap'>
                    <div className='col-lg-4'>
                        <img
                            src={process.env.PUBLIC_URL + "/source/producto/" + detallePedido.producto.imagen}
                            className='img-fluid'
                            alt='producto'
                        />
                    </div>
                    <div className='col-lg-6'>
                        <h5 className='colorLetra'> {detallePedido.producto.nombre}</h5>
                        <h6 className='colorLetra2'>Precio: {detallePedido.precio}</h6>
                    </div>
                    <div className='col-lg-2  d-flex justify-content-end flex-wrap'>
                        <div className='row'>
                            <button className='btn border-0 rounded-circle p-2 circuloverde m-0' style={{ background: '#EE814A' }}>
                                <samp>{detallePedido.cantidad}</samp>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}