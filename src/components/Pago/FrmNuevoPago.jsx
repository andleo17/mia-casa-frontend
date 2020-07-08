import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

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
    const onSubmit = (data) => console.log(data);
    const [registrarPago] = useMutation(MUTATION_REGISTRAR_PAGO);
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
                                        <label for='txtSerie'>Serie:</label>
                                        <input
                                            type='text'
                                            name='txtSerie'
                                            id='txtSerie'
                                            placeholder='Ingrese la serie '
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese una serie',
                                                },
                                            })}
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
                                            placeholder='Ingrese el número'
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese un numero',
                                                },
                                            })}
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
                                            placeholder='Ingrese el pedido a pagar'
                                            className='form-control'
                                            ref={register({
                                                required: {
                                                    value: true,
                                                    message: 'Ingrese un pedido',
                                                },
                                            })}
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
                                <button className='btn btn-shift mr-3' type='submit'>
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