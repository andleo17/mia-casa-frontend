import React, { Component } from 'react';

export default class ItemListado extends Component {
	render() {
		return (
			<div className='card mb-3'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-2 row align-items-center'>
							<img
								src={this.props.url}
								className='img-fluid'
								alt='pedido'
							/>
						</div>
						<div className='col-6'>
							<h4>Mesa N°{this.props.numero}</h4>
							<span>s/ {this.props.monto}</span>
							<br />
						</div>
						<div className='col-4 col-btn align-self-end'>
							<button className='btn btn-warning btn-accion btn-circle'>
								<i className='fa fa-credit-card'></i> Pagar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
