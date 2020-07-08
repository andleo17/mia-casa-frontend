import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {QUERY_LISTAR_PAGO } from '../Pago/ListaPago';
import {QUERY_LISTAR_PEDIDO } from '../Pago/ListaPedido';

const MUTATION_REGISTRAR_PAGO = gql`
    mutation registrarPago( $monto: Float!, $tipoPago: ID!, $pedido: ID! ) {
        registrarPago(
            monto: $monto
            tipoPago: $tipoPago
            pedido: $pedido
        )
    }
`;

export default function FrmNuevoPago() {
    const { register, handleSubmit} = useForm();
    const [registrarPago, {data}] = useMutation(MUTATION_REGISTRAR_PAGO);
    const onSubmit = () =>
        registrarPago({
            variables: { 
                monto: document.getElementById('txtMonto').value, 
                tipoPago: document.getElementById('cboTipo').value, 
                pedido: document.getElementById('txtPedido').value 
            },
            refetchQueries: [
                {
                    query: QUERY_LISTAR_PAGO
                    // agregar otro refecht
                },
            ],
        });
    
    return( 
        <div className='card mb-3' style={{ width: '100%' }}>
            <div className='card-body'>
                <h5 className='card-title'>Datos del pago</h5>
                <div
                    className='card bg-light mb-3 ml-4'
                    style={{ width: '95%' }}>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='row'>
                                <div className='col-lg-6 col-xl-6'>  
                                    <div className='form-group'>
                                        <label for='txtMonto'>Monto a pagar:</label>
                                        <input
                                            type='number'
                                            enable='false'
                                            name='txtMonto'
                                            id='txtMonto'
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true
                                                },
                                            })}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label for='cboTipo'>
                                            Tipo de pago:
                                        </label>
                                        <select
                                            // ver la documentacion
                                            name='cboTipo'
                                            id='cboTipo'
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true
                                                },
                                            })}>
                                            <option value='1'>
                                                Efectivo
                                            </option>
                                            <option value='2'>
                                                Tarjeta
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-xl-6'>
                                    <div className='form-group'>
                                        <label for='txtPedido'>
                                            Pedido:
                                        </label>
                                        <input
                                            type='number'
                                            name='txtPedido'
                                            id='txtPedido'
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true
                                                },
                                            })}
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='row justify-content-end'>
                                <button 
                                    className='btn btn-shift mr-3' 
                                    type='submit'
                                >
                                    Registrar
                                </button>
                            </div>
                        </form>      
                    </div>
                </div>
            </div>
        </div>
        
    );
}