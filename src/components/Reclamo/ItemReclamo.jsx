import React, { Component } from 'react';

export default class ItemReclamo extends Component {
	render() {
		return (
			<div class='card mb-3'>
				<div class='card-body'>
					<div class='row'>
						<div class='col-2 row align-items-center'>
							<img
								src={this.props.url}
								class='img-fluid'
								alt='Responsive'
							/>
						</div>
						<div class='col-6'>
							<h4>Reclamo {this.props.numero}</h4>
						</div>
						<div class='col-4 col-btn align-self-end'>
							<button class='btn btn-primary btn-accion btn-circle'>
								<i class='fa fa-pen'></i>
							</button>
							<button class='btn btn-danger btn-accion btn-circle'>
								<i class='fa fa-trash'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
