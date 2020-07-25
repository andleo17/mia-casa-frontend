import React from 'react';
import ListaProductoPedido from '../components/Pedido/ListaProductoPedido';

export const initialState = {
	__typename: 'Pedido',
    monto: '',
    mesaId: '',
    pago: {
		id: '',
    },
    personal: {
      id: '',
      nombres: '',
    },
    mesa: {
      numero: '',
    },
    productos: {
      precio: '',
      cantidad: '',
      entregado: '',
      estado: '',
      producto: '',
    }
};

export default function Pedido() {
	return (
		<div>
			<h1>Seleccionar productos</h1>
			<ListaProductoPedido />
		</div>
	);
}
