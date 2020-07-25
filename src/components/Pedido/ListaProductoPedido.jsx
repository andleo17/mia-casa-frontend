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
		<div className='col-lg-7' >
			<div className='card  border-0'>
				<div className='card-body pt-0' style={{
					height: '30rem'
				}}>
					<select name="" id="" className='form-control col-lg-12  mb-2 ' >
						<section>TODOS</section>
					</select>

					<div className='  input-group d-flex justify-content-between flex-wrap '>
						<input
							type='search'
							className='form-control col-lg-9'
							placeholder='Buscar producto'
							aria-label='Busque un producto'
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
						>
							<span className='' >  <i className='fa fa-plus m-1' /> Buscar</span>
						</button>
					</div>


					<div className=' mt-3'
						style={{
							height: '90%',
							overflowY: 'scroll',
						}}
					>
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
