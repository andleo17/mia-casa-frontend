import React, { Component } from 'react';

export default class itemListado extends Component {
	render() {
		return (
            <div className="card mb-3">
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={this.props.url} className="img-fluid" />
                        </div>
                        <div className="col-6">
                            <h4>Mesa N°{this.props.numero}</h4>
                            <span>Estado: {this.props.estado}</span>
                        </div>
                        <div className="col-4 col-btn align-self-end">
                            <button className="btn btn-primary btn-accion btn-circle"><i className="fa fa-pen"></i></button>
                            <button className="btn btn-warning btn-accion btn-circle"><i className="fa fa-ban"></i></button>
                            <button className="btn btn-danger btn-accion btn-circle"><i className="fa fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}