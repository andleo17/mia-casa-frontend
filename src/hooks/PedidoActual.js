const { useState, useEffect } = require('react');
const { gql } = require('apollo-boost');
const { useSubscription } = require('react-apollo');

const PEDIDO_AGREGADO = gql`
	subscription PedidoAgregado($mesaId: ID!) {
		pedidoAgregado {
			id
			estado
			monto
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
`;

export function usePedidoActual(mesaId) {
	const [estado, setEstado] = useState('libre');
	const { data } = useSubscription(PEDIDO_AGREGADO, {
		variables: { mesaId },
	});
	useEffect(() => {
		if (data?.pedidoAgregado) {
			const pedidosCompletos = data.pedidoAgregado.productos.every(
				(p) => p.entregado
			);
			if (pedidosCompletos) {
				setEstado('ocupado');
			} else {
				setEstado('pendiente');
			}
		} else {
			setEstado('libre');
		}
	}, [data]);

	return { estado, pedidoActual: data?.pedidoAgregado };
}
