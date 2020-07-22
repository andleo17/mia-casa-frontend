import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ProductoPedidoItem from './ProductoPedidoItem';

export default function CartaItem({ categoria, props }) {

	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='row'>
                    <h5>{categoria.nombre}</h5>
				</div>
                <div className="row">
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