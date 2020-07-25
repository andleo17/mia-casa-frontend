import React from 'react';
import ProductoPedidoItem from './ProductoPedidoItem';

export default function CartaItem({ categoria, props }) {
	return (
        <div className='card border-0 ' 
         >
			<div className='card-body  '>
				<div className='row'>
                    <h5>{categoria.nombre}</h5>
				</div>
                <div className="">
                    {categoria.productos.map((producto) => {
                        return (
                            <ProductoPedidoItem
                                url={producto.imagen}
                                producto={producto}
                                key={producto.id}
                            />
                        );
                    })}
                </div>
			</div>
		</div>
	);
}