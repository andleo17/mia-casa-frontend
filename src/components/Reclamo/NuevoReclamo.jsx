import React, { Component } from 'react';

export default class nuevoReclamo extends Component{
    render(){
        return (
            <div class='card mb-3' style={{ width: '100%' }}>
                <div class='card-body'>
                    <h5 class='card-title'>Datos del reclamo</h5>
                    <div
                        class='card bg-light mb-3 ml-4'
                        style={{ width: '95%' }}>
                        <div class='card-body'>
                            <div class='row'>
                                <div class='col-lg-6 col-xl-6'>
                                    <div class='form-group'>
                                        <label for='txtPedido'>
                                            Pedido:
                                        </label>
                                        <input
                                            type='text'
                                            name='txtPedido'
                                            id='txtPedido'
                                            placeholder='Ingrese el pedido...'
                                            class='form-control'
                                        />
                                    </div>
                                    <div class='form-group'>
                                        <label for='txtProducto'>
                                            Producto:
                                        </label>
                                        <input
                                            type='text'
                                            name='txtProducto'
                                            id='txtProducto'
                                            placeholder='Ingrese el producto...'
                                            class='form-control'
                                        />
                                    </div>
                                </div>
                                <div class='col-lg-6 col-xl-6'>
                                    <div class='form-group'>
                                        <label for='txtMotivo'>
                                            Motivo:
                                        </label>
                                        <textarea
                                            name='txtMotivo'
                                            id='txtMotivo'
                                            placeholder='Ingrese el pedido...'
                                            class='form-control'></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class='row justify-content-end'>
                                <button class='btn btn-shift mr-3'>
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
