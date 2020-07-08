import React, { Component } from 'react';

export default class ItemListado extends Component {
	render() {
		return (
			<div className='card mb-3'>
				<div className='card-body'>
					<div className='row'>
						<div className='col-2'>
							<img
								src={this.props.url}
								className='img-fluid'
								alt='producto'
							/>
						</div>
						<div className='col-6'>
							<h4>{this.props.nombre}</h4>
							<span>Tipo: {this.props.tipo}</span>
							<br />
							<span>
								Estado: {this.props.estado}, Precio: s/{' '}
								{this.props.precio}
							</span>
						</div>
						<div className='col-4 col-btn align-self-end'>
							<button className='btn btn-primary btn-accion btn-circle'>
								<i className='fa fa-pen'></i>
							</button>
							<button className='btn btn-warning btn-accion btn-circle'>
								<i className='fa fa-ban'></i>
							</button>
							<button className='btn btn-danger btn-accion btn-circle'>
								<i className='fa fa-trash'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
