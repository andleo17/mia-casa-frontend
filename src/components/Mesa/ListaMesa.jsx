import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import MesaItem from './MesaItem';

const QUERY_LISTAR_MESA = gql`
	query ListarMesa {
		listarMesa {
			id
			numero
			estado
		}
	}
`;

export default function ListaMesa() {
	const { loading, error, data } = useQuery(QUERY_LISTAR_MESA);

	if (loading) return <h1>Cargando...</h1>;
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
			</h1>
		);

	return (
		<div className='col'>
			<div className='card h-100'>
				<div className='card-body'>
					<h5 className='card-title'>Listado de Mesas</h5>
					<div className='input-group'>
						<input
							type='search'
							className='form-control'
							placeholder='Buscar...'
							aria-label='Busque una mesa'
						/>
						<button className='btn btn-shift' type='button'>
							<i className='fa fa-plus' />
							<span className='ml-2'>Agregar</span>
						</button>
					</div>
					<div className='mt-3'>
						{data.listarMesa.map((mesa) => {
							return (
								<MesaItem
									key={mesa.id}
									url='https://static.vecteezy.com/system/resources/previews/000/265/671/non_2x/cartoon-wood-table-vector.jpg'
									mesa={mesa}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}