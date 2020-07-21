import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ProductoItem from './ProductoItem';

export const QUERY_LISTAR_PRODUCTO = gql`
	query ListarProducto {
		listarProducto {
			id
			nombre
			descripcion
			cantidad
			precio
			imagen
			estado
			tipoProducto{
				id
				nombre
			}
		}
	}
`;



export default function ListaProducto(props) {
	const { loading, error, data } = useQuery(QUERY_LISTAR_PRODUCTO);
	const { update, initial } = props;
	if (loading) return <h1>Cargando...</h1>;
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
			</h1>
		);

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
						<button className='btn btn-shift' type='button' onClick={()=>{update(initial)}}>
							<i className='fa fa-plus' />
							<span className='ml-2'>Agregar</span>
						</button>
					</div>
					<div className='mt-3'>
						{data.listarProducto.map((producto) => {
							return (
								<ProductoItem
									url='https://static.vecteezy.com/system/resources/previews/000/265/671/non_2x/cartoon-wood-table-vector.jpg'
									producto={producto}
									showData= {()=>update(producto)}
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