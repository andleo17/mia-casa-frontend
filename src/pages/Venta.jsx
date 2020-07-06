import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import MesaPedidoItem from '../components/Mesa/MesaPedidoItem';

const QUERY_LISTAR_MESA = gql`
	query ListarMesa {
		listarMesa {
			id
			numero
			ocupado
			pedidoActual {
				id
				estado
				productos {
					cantidad
					precio
					entregado
					producto {
						id
						nombre
					}
				}
			}
		}
	}
`;

export default function Venta() {
	const { loading, error, data } = useQuery(QUERY_LISTAR_MESA);

	if (loading) return <h1>Cargando...</h1>;
	if (error) return <h1>Sucedió un error :c</h1>;

	return (
		<div className='col'>
			<div className='row p-3'>
				<h1 className='col-12'>Mesas</h1>
				<div className='col'>
					<div className='row'>
						{data.listarMesa.map((m) => (
							<MesaPedidoItem key={m.id} mesa={m} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
