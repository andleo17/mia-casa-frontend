import React, { Component } from 'react';

export default class nuevoPago extends Component{
    render(){
        return( 
            <div
                className='card bg-light mb-3 ml-4'
                style={{ width: '95%' }}>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-lg-6 col-xl-6'>
                            <div className='form-group'>
                                <label for='txtSerie'>Serie:</label>
                                <input
                                    type='text'
                                    name='txtSerie'
                                    id='txtSerie'
                                    placeholder='Ingrese la serie del pago...'
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group'>
                                <label for='txtNumero'>
                                    Número:
                                </label>
                                <input
                                    type='text'
                                    name='txtNumero'
                                    id='txtNumero'
                                    placeholder='Ingrese el número del pago...'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-lg-6 col-xl-6'>
                            <div className='form-group'>
                                <label for='txtPedido'>
                                    Pedido:
                                </label>
                                <input
                                    type='text'
                                    name='txtPedido'
                                    id='txtPedido'
                                    placeholder='Ingrese el pedido a pagar...'
                                    className='form-control'
                                />
                            </div>
                            <div className='form-group'>
                                <label for='cboTipo'>
                                    Tipo de pago:
                                </label>
                                <select
                                    name='cboTipo'
                                    id='cboTipo'
                                    className='form-control'>
                                    <option value='1'>
                                        Efectivo
                                    </option>
                                    <option value='2'>
                                        Tarjeta
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-end'>
                        <button className='btn btn-shift mr-3'>
                            Registrar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}