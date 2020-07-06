import React, { Component } from 'react';

export default class itemPago extends Component {
	render() {
		return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-2 row align-items-center">
                            <img src={this.props.url} className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <h4>Pago {this.props.numero}</h4>
                            <span>Monto: {this.props.monto}</span><br/>
                        </div>
                        <div className="col-4 col-btn align-self-end">
                            <button className="btn btn-primary btn-accion btn-circle"><i className="fa fa-search"></i></button>
                            <button className="btn btn-danger btn-accion btn-circle"><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}