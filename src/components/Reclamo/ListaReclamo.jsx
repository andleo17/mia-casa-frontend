import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemReclamo from './ItemReclamo';

export const QUERY_LISTAR_RECLAMO = gql`
	query ListarReclamos {
		listarReclamo {
			id
			motivo
			detallePedido {
				producto{
					id
					nombre
				}
				pedido {
					id
					mesa {
						id
						numero
					}
					productos {
						precio
						producto {
							id
							nombre
						}
					}
				}
			}
		}
	}
`;

export default function ListaReclamo(props) {
	const { loading, error, data } = useQuery(QUERY_LISTAR_RECLAMO);
	const { update, initial } = props;

	if (loading) return <h1>Cargando... </h1>;
	if (error) return <h1>Error al mostrar datos....</h1>;

	return (
		<div className='card-body bg-light reclamof' style={{ width: '100%' }}>
			{/* <div class='card-body'> */}
				<h5 className='card-title d-flex justify-content-around flex-wrap'> Lista de Reclamos </h5>
				<div className='input-group d-flex justify-content-around flex-wrap m-3'>
					<input
						type='search'
						className=' form-control col-lg-8 '
						placeholder='Buscar...'
						aria-label='Busque un reclamo'
					/>
						<button className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'>
							<span  className='' >  <i className='fa fa-plus m-1' /> Agregar</span>
						</button>
				</div>

				<div
					className='pl-4'
					style={{
						height: '30rem',
						overflowY: 'auto',
					}}>
					{data.listarReclamo.map((reclamo) => {
						return (
							<ItemReclamo
								reclamo={reclamo}
								showData= {()=>update(reclamo)}
								key={reclamo.id}
							/>
						);
					})}
				</div>
			</div>
		// </div>
	);
}
