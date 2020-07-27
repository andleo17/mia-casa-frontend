import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPedido from './ItemPedido';
import dish from '../../assets/dish.png';

export const QUERY_LISTAR_PEDIDO = gql`
	query ListarPedido($pago: Boolean, $mesa: Int) {
		listarPedido(pago: $pago, mesa: $mesa) {
			id
			mesa {
				id
				numero
			}
			productos {
				precio
			}
		}
	}
`;

export default function ListaPedido(props) {
	const [mesa, setFiltro] = useState(undefined);
	const { setPayData } = props;
	const { loading, error, data, refetch } = useQuery(QUERY_LISTAR_PEDIDO, {
		variables: {
			mesa: parseInt(mesa),
			pago: false,
		},
	});
	// this.state = {monto: 0, numeropago: ""};

	if (loading) return <h1>Cargando...</h1>;
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
			</h1>
		);

	return (
		<div className=' mb-3' style={{ width: '100%' }}>
			<div className='card-body'>
				<h5 className='card-title'>Listado de Pedidos</h5>
				<div className='input-group mb-3 pl-4'>
					<input
						type='search'
						id='txtbuscar'
						className='form-control'
						placeholder='Buscar por mesa...'
						aria-label='Buscar pedido...'
						defaultValue={mesa}
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
										document.getElementById('txtbuscar')
											.value
									);
									refetch();
								}
							}
						}}
					/>
				</div>

				<div
					className='pl-4'
					style={{
						height: '17.4rem',
						overflowY: 'auto',
					}}>
					{data.listarPedido.map((pedido) => {
						return (
							<ItemPedido
								url={dish}
								mesanumero={pedido.mesa.numero}
								monto={pedido.productos.reduce(
									(sum, p) => sum + p.precio,
									0
								)}
								id={pedido.id}
								setData={() =>
									setPayData({
										numero: pedido.id,
										monto: pedido.productos.reduce(
											(sum, p) => sum + p.precio,
											0
										),
									})
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
