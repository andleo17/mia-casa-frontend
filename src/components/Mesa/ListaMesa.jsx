import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import MesaItem from './MesaItem';
import plato from '../../assets/pedido.png';
export const QUERY_LISTAR_MESA = gql`
	query ListarMesa($filtro: Int) {
		listarMesa(filtro: $filtro) {
			id
			numero
			estado
		}
	}
`;

export default function ListaMesa(props) {
	const { update, initial } = props;
	const [mesaId, setMesaId] = useState(undefined);
	const { loading, error, data, refetch } = useQuery(QUERY_LISTAR_MESA,
		{
			variables: {
				filtro: mesaId
			},
			pollInterval: 500,
		}
	);
	

	if (loading){
		return(
			<div className='col-lg-6'>
			<div className='card h-100 border-0'>
				<div className='card-body'>
					<h5 className='card-title'>Listado de Mesas</h5>
					<div className=' input-group d-flex justify-content-around flex-wrap'>
						<input
							type='number'
							id='txtbuscar'
							className='form-control col-lg-8'
							placeholder='Buscar...'
							aria-label='Busque una mesa'
							defaultValue={mesaId}	
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
							>
							
							<span  className='' >  <i className='fa fa-plus m-1' /> Agregar</span>
						</button>
					</div>
					<div className='mt-3'>
						<h4>Cargando...</h4> 
					</div>
				</div>
			</div>
		</div>

		);
	} 
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
				{/* {error.message} */}
			</h1>
		);

	return (
		<div className='col-lg-6'>
			<div className='card h-100 border-0'>
				<div className='card-body'>
					<h5 className='card-title'>Listado de Mesas</h5>
					<div className=' input-group d-flex justify-content-around flex-wrap'>
						<input
							type='number'
							id='txtbuscar'
							className='form-control col-lg-8'
							placeholder='Buscar...'
							aria-label='Busque una mesa'
							defaultValue={mesaId}
							onChange={(e) => {
								if (e.target.value === '') {
										setMesaId(undefined);
										refetch();
								}
							}}
							onKeyDown={(e) => {
									if (e.keyCode === 13 && !e.shiftKey) {
										e.preventDefault();
										if (e.target.value === '') {
											setMesaId(undefined);
											refetch();
										} else {
											setMesaId(
												parseInt(document.getElementById(
													'txtbuscar'
												).value)
											);
											refetch();
											console.log("GAAAA")
										}
									}
							}}
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
							onClick={() => {
								update(initial);
							}}>
							
							<span  className='' >  <i className='fa fa-plus m-1' /> Agregar</span>
						</button>
					</div>
					<div className='mt-3'>
						{data.listarMesa.map((mesa) => {
							return (
								<MesaItem
									url={plato}
									mesa={mesa}
									showData={() => update(mesa)}
									key={mesa.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
