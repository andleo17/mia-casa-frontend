import React from 'react';
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
			tipoProducto {
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
					<h5 className='card-title font-weight-bold'>Listado de Productos</h5>
					<div className=' input-group d-flex justify-content-between flex-wrap m-0'>
						<input
							type='search'
							className='form-control col-lg-9 '
							placeholder='Buscar...'
							aria-label='Busque un producto'
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
							>
							
							<span  className='' >  <i className='fa fa-plus m-1' /> Agregar</span>
						</button>
					
					</div>
					<div className='mt-3'
					 style={{height:'30rem', overflowY:'scroll'}}
					 >
						{data.listarProducto.map((producto) => {
							return (
								<ProductoItem
									url={producto.imagen}
									producto={producto}
									showData={() => update(producto)}
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
