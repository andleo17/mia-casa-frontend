import React, { Component } from 'react';
import plato from '../../assets/pedido.png';

export default class ItemListado extends Component {

	render() {
		return (
			<div className='card listaBorde mb-3'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-3 row align-items-center'>
						<img
								src={plato}
								className='img-fluid'
								alt='pedido'
							/>
						</div>
						<div className='col-7'>
							<h5 className='colorLetra'>Mesa N°{this.props.mesanumero}</h5>
							<span className='colorLetra2'>s/ {this.props.monto}</span>
							<br />
						</div>
						<div className='col-2 col-btn align-self-end'>
							<button className='btn btn-warning btn-accion btn-circle pt-1 pb-1 m-0' onClick={
									this.props.setData
								}>
								<i className='fa fa-credit-card m-0'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
