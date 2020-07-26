import React, { useState } from 'react';
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
    productos: [{
      precio: '',
      cantidad: '',
      entregado: '',
      estado: '',
      producto: '',
    }]
};

export default function Pedido({props}) {
  const mesaId = props.match.params.num;
  const [selectedItem, setSelectedItem] = useState(initialState);

	return (
		<div className='col'>
			
    <h1>Seleccionar productos</h1>
			
			<div className='row p-3'>
				<ListaProductoPedido
          item={selectedItem}
          update={setSelectedItem}
          initial = {initialState}
        />

				<div className='col-lg-5' >
					<ListaPedido 
            idMesa = {mesaId}
            item={selectedItem}
            key={selectedItem.mesaId}
            update={setSelectedItem}
            initial = {initialState}
          />
				</div>

			</div>
		</div>
		
		
	);
}
