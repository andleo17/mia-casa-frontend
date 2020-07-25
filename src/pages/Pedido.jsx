import React from 'react';
import ListaProductoPedido from '../components/Pedido/ListaProductoPedido';
import ListaPedido from '../components/Pedido/ListaPedido';

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

export default function Pedido({props}) {
  const id = props.match.params.id;
	return (
		<div className='col'>
			
    <h1>Seleccionar productos</h1>
			
			<div className='row p-3'>
				<ListaProductoPedido/>

				<div className='col-lg-5' >
					<ListaPedido 
            mesaId = {id}
          />
				</div>

			</div>
		</div>
		
		
	);
}
