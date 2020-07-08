import React, { Component, Fragment } from 'react';
import ItemPedido from '../components/Pago/ItemPedido';
import ItemPago from '../components/Pago/ItemPago';
import NuevoPago from '../components/Pago/NuevoPago';
import { gql } from 'apollo-boost';



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
						<NuevoPago />
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
