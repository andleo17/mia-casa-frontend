import React, { useState } from 'react';
import ListadoPagos from '../components/Pago/ListaPago'
import ListadoPedidos from '../components/Pago/ListaPedido'
import NuevoPago from '../components/Pago/FrmNuevoPago'

export const state = {
	numero:"",
	monto:""
}


export default function Pago() {
	// this.state = {monto: null, pedido: ''};
	const [selectedItem, setSelectedItem] = useState(state);
	console.log(selectedItem);
	// handlePayData = (valuePayData) => {
	// 	this.state({monto: valuePayData.monto , pedido: valuePayData.nombre})
	// }

	return (
		<div className='col-11 row mt-3 mb-3'>
			<div className='col-lg-6 col-xl-6'>
				<NuevoPago  
					item = {selectedItem} 
					key={selectedItem.id}
					setPayData = {setSelectedItem}
					initialState = {state}
				/>
				<ListadoPedidos 
					setPayData = {setSelectedItem}
					initialState = {state} 
				/>
			</div>
			<div className='col-lg-6 col-xl-6'>
				<ListadoPagos />
			</div>
		</div>
	);
}
