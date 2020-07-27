import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import ProductoPedidoItem from './ProductoPedidoItem';

export const QUERY_LISTAR_PRODUCTOS_PEDIDOS = gql`
	query buscarPedido($numero: Int!) {
		listarMesa(filtro: $numero) {
			id
			numero
			pedidoActual {
				id
				monto
				productos {
					cantidad
					entregado
					precio
					producto {
						id
						nombre
						imagen
						cantidad
					}
				}
			}
		}
	}
`;

export default function ListaPedido({ numero }) {
	const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTOS_PEDIDOS, {
		variables: { numero: parseInt(numero) },
	});

	if (loading) return 'Cargando...';
	if (error)
		return 'No se ha podido establecer la conexión con el servidor, intentelo nuevamente';

	const { pedidoActual } = data.listarMesa[0];

	return (
		<div className=' nose col-lg-12'>
			<div className='card-body bg-light reclamof col-lg-12'>
				<h5 className='card-title d-flex justify-content-around flex-wrap font-weight-bold'>
					Pedido
				</h5>
				<div
					style={{
						height: '90%',
						overflowY: 'scroll',
					}}>
					{pedidoActual ? (
						pedidoActual.productos.map((producto) => {
							return (
								<ProductoPedidoItem
									detallePedido={producto}
									key={producto.producto.id}
								/>
							);
						})
					) : (
						<div className='text-center'>
							<span>No se encuentran productos</span>
						</div>
					)}
				</div>
			</div>
			<div>
				<span className='row d-flex justify-content-end flex-wrap mr-3 mt-2'>
					Total: S/ {pedidoActual?.monto || 0}
				</span>
			</div>
			<div className='row d-flex justify-content-end flex-wrap mt-3 mb-3'>
				<Link to='/venta' style={{ textDecoration: 'none' }}>
					<button className='btn-dark  mr-3 d-flex align-items-center border-0 justify-content-center text-decoration-none'>
						<span className=''>Cancelar</span>
					</button>
				</Link>
				<button
					className='btnColor d-flex align-items-center border-0 mr-2 justify-content-center
							text-decoration-none'>
					<span className=''>Confirmar</span>
				</button>
			</div>
		</div>
	);
}
