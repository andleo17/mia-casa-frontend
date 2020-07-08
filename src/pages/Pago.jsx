import React, { Component, Fragment } from 'react';
import ListadoPagos from '../components/Pago/ListaPago'
import ListadoPedidos from '../components/Pago/ListaPedido'
import NuevoPago from '../components/Pago/NuevoPago';
import { gql } from 'apollo-boost';


export default function Pago() {
	return (
		<div className='col-11 row mt-3 mb-3'>
			<div className='col-lg-6 col-xl-6'>
				<NuevoPago />
				<ListadoPedidos />
			</div>
			<div className='col-lg-6 col-xl-6'>
				<ListadoPagos />
			</div>
		</div>
	);
}
