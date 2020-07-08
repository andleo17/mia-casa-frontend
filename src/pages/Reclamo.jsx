import React, { Component, Fragment } from 'react';
import ListadoReclamo from '../components/Reclamo/ListaReclamo'
import ListadoPedidos from '../components/Reclamo/ListaPedido'
import NuevoReclamo  from '../components/Reclamo/NuevoReclamo';
export default class Reclamo extends Component {
	render() {
		return (
			<div className='col-11 row mt-3 mb-3'>
				<div className='col-lg-6 col-xl-6'>
					<NuevoReclamo />
					<ListadoPedidos />
				</div>
				<div className='col-lg-6 col-xl-6'>
					<ListadoReclamo />
				</div>
		</div>
		);
	}
}
