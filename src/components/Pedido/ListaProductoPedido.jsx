import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import Carta from './Carta';

export const QUERY_LISTAR_PRODUCTO = gql`
	query ListarProducto {
		listarTipoProducto {
			id
			nombre
			productos {
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
	}
`;

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
						{data.listarTipoProducto.map((cat) => {
							return (
								<Carta 
									categoria={cat}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
