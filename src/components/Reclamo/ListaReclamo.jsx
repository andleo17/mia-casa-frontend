import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemReclamo from './ItemReclamo';

export const QUERY_LISTAR_RECLAMO = gql`
	query ListarReclamos($filtro: String) {
		listarReclamo(filtro: $filtro) {
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
	const [filtro, setFiltro] = useState(undefined);
	const { loading, error, data, refetch } = useQuery(QUERY_LISTAR_RECLAMO,
		{
			variables: {
				filtro: filtro
			},
			pollInterval: 500,
		}
	);
	const { update, initial } = props;
	

	if (loading) return <h1>Cargando... </h1>;
	if (error) return <h1>Error al mostrar datos....</h1>;

	return (
		<div className='card-body bg-light reclamof' style={{ width: '100%' }}>
			{/* <div class='card-body'> */}
				<h5 className='card-title d-flex justify-content-around flex-wrap'> Lista de Reclamos </h5>
				<div className='input-group d-flex justify-content-around flex-wrap '>
					<input
						type='search'
						id='txtbuscar'
						className=' form-control col-lg-8 '
						placeholder='Buscar...'
						aria-label='Busque un reclamo'
						defaultValue={filtro}
						onChange={(e) => {
								if (e.target.value === '') {
										setFiltro(undefined);
										refetch();
								}
							}}
						onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											setFiltro(undefined);
											refetch();
										} else {
											setFiltro(
												document.getElementById(
													'txtbuscar'
												).value
											);
											refetch();
										}
									}
							}}
					/>
						<button className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
							onClick={() => {
								update(initial);
							}}
							>
							<span  className='' >  <i className='fa fa-plus m-1' /> Agregar</span>
						</button>
				</div>

				<div
					className='mt-3'
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
