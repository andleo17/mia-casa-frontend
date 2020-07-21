import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import MesaItem from './MesaItem';
import plato from '../../assets/pedido.png';
export const QUERY_LISTAR_MESA = gql`
	query ListarMesa {
		listarMesa {
			id
			numero
			estado
		}
	}
`;



export default function ListaMesa(props) {
	const { loading, error, data } = useQuery(QUERY_LISTAR_MESA);
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
					<h5 className='card-title'>Listado de Mesas</h5>
					<div className=' input-group '>
						<input
							type='search'
							className='form-control col-lg-10 '
							placeholder='Buscar...'
							aria-label='Busque una mesa'
						/>
						<button className='btn btn-shift' type='button' onClick={()=>{update(initial)}}>
							<i className='fa fa-plus' />
							<span className='ml-2'>Agregar</span>
						</button>
					</div>
					<div className='mt-3'>
						{data.listarMesa.map((mesa) => {
							return (
								<MesaItem
									url={plato}
									mesa={mesa}
									showData= {()=>update(mesa)}
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
