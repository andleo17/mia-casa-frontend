import React, { Component, Fragment } from 'react';
import ItemPedido from '../components/Pago/ItemPedido';
import ItemPago from '../components/Pago/ItemPago';
import { gql } from 'apollo-boost';

const QUERY_LISTAR_PAGO = gql`
	query ListarPago {
		listarPago {
			id
			serie
			numero
			fecha
			monto
			tipoPago {
				id
				nombre
			}
			pedido {
				id
				fecha
				mesa {
					id
					numero
				}
				productos {
					precio
					cantidad
					reclamos {
						id
						motivo
					}
				}
				personal {
					id
					nombres
					apellidos
				}
			}
		}
	}
`;

const QUERY_LISTAR_PEDIDO = gql`
	query ListarPedido {
		id
		fecha
		personal {
			id
			nombres
			apellidos
		}
		mesa {
			id
			numero
		}
		productos {
			precio
			cantidad
			producto {
				id
				nombre
			}
		}
	}
`;

export default function Pago() {
	return (
		<div className='col-11 row mt-3 mb-3'>
			<div className='col-lg-6 col-xl-6'>
				<div className='card mb-3' style={{ width: '100%' }}>
					<div className='card-body'>
						<h5 className='card-title'>Datos del pago</h5>
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
					</div>
				</div>

				<div className='card mb-3' style={{ width: '100%' }}>
					<div className='card-body'>
						<h5 className='card-title'>Listado de Pedidos</h5>
						<div className='input-group mb-3 pl-4'>
							<input
								type='search'
								className='form-control'
								placeholder='Buscar...'
								aria-label='Busque un pedido...'
							/>
						</div>

						<div
							className='pl-4'
							style={{
								height: '17.4rem',
								overflowY: 'auto',
							}}>
							{/* <ListadoPedidos>
                                    {({ loading, error, data }) => {
                                        if (loading)
                                            return <p>Cargando...</p>;
                                        if (error)
                                            return (
                                                <p>
                                                    No se ha podido
                                                    establecer la conexión
                                                    con el servidor,
                                                    intentelo nuevamente
                                                </p>
                                            );

                                        return data.listarPedido.map(
                                            (pedido) => {
                                                return (
                                                    <ItemPedido
                                                        url=''
                                                        numero={
                                                            pedido.mesa
                                                                .numero
                                                        }
                                                        monto={pedido.monto}
                                                        id={pedido.id}
                                                    />
                                                );
                                            }
                                        );
                                    }}
                                </ListadoPedidos> */}
						</div>
					</div>
				</div>
			</div>

			<div className='col-lg-6 col-xl-6'>
				<div className='card' style={{ width: '100%' }}>
					<div className='card-body'>
						<h5 className='card-title'>Listado de Pagos</h5>
						<div className='input-group mb-3 pl-4'>
							<input
								type='search'
								className='form-control'
								placeholder='Buscar...'
								aria-label='Busque un pago'
							/>
							<div className='input-group-append'>
								<button className='btn btn-shift' type='button'>
									<i className='fa fa-plus'></i> Agregar
								</button>
							</div>
						</div>

						<div
							className='pl-4'
							style={{
								height: '40rem',
								overflowY: 'auto',
							}}>
							{/* <ListadoPagos>
                                    {({ loading, error, data }) => {
                                        if (loading)
                                            return <p>Cargando...</p>;
                                        if (error)
                                            return (
                                                <p>
                                                    No se ha podido
                                                    establecer la conexión
                                                    con el servidor,
                                                    intentelo nuevamente
                                                </p>
                                            );

                                        return data.listarPago.map(
                                            (pago) => {
                                                return (
                                                    <ItemPago
                                                        url=''
                                                        numero={pago.numero}
                                                        monto={pago.monto}
                                                        id={pago.id}
                                                    />
                                                );
                                            }
                                        );
                                    }}
                                </ListadoPagos> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
