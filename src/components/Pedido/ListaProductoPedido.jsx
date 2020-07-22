import React from 'react';
import { useQuery } from 'react-apollo';
import { QUERY_LISTAR_PRODUCTO } from '../Producto/ListaProducto';
import ProductoPedidoItem from './ProductoPedidoItem';

export default function ListaProductoPedido() {
	const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTO);
	if (loading) return 'Cargando...';
	if (error) return 'Error';
	return (
		<div className='col-lg-6'>
			<div className='card h-100 border-0'>
				<div className='card-body'>
					<h5 className='card-title'>Listado de Productos</h5>
					<div className=' input-group '>
						<input
							type='search'
							className='form-control col-lg-10 '
							placeholder='Buscar...'
							aria-label='Busque un producto'
						/>
					</div>
					<div className='mt-3'>
						{data.listarProducto.map((producto) => {
							return (
								<ProductoPedidoItem
									producto={producto}
									key={producto.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
