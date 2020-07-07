import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';
import MesaPedidoItem from '../components/Mesa/MesaPedidoItem';
import { NavLink } from 'react-router-dom';

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
		<Fragment>
			<div className='row'>
				<h1>Seleccione una mesa</h1>
				<div className='ml-auto'>
					<NavLink className='btn btn-primary' to='/mesa'>
						Administrar
					</NavLink>
				</div>
			</div>
			<div className='row mt-4 overflow-auto'>
				{data.listarMesa.map((m) => (
					<MesaPedidoItem key={m.id} mesa={m} />
				))}
			</div>
		</Fragment>
	);
}
