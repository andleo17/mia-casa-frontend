import React, { Fragment, useState, useEffect } from 'react';
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
	const [mesas, setMesas] = useState([]);
	const { loading, error, data } = useQuery(QUERY_LISTAR_MESA);

	useEffect(() => {
		data && data.listarMesa && setMesas(data.listarMesa);
	}, [data]);

	if (loading) return <h1>Cargando...</h1>;
	if (error) return <h1>Sucedió un error :c</h1>;

	return (
		<Fragment>
			<div className='d-flex justify-content-between align-items-center'>
				<h1>Seleccione una mesa</h1>
				<NavLink className='btn btn-primary' to='/mesa'>
					Administrar
				</NavLink>
			</div>
			<div className='row overflow-auto mx-5'>
				{mesas.map((m) => (
					<MesaPedidoItem key={m.id} mesa={m} />
				))}
			</div>
		</Fragment>
	);
}
