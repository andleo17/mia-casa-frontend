import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPago from './ItemPago';
import money from '../../assets/money.png';

export const QUERY_LISTAR_PAGO = gql`
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

export default function ListaPago(){
    const { loading, error, data } = useQuery(QUERY_LISTAR_PAGO);

    if (loading) return <h1>Cargando...</h1>;
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
			</h1>
        );
    
        return(
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
                        
                    </div>

                    <div
                        className='pl-4'
                        style={{
                            height: '40rem',
                            overflowY: 'auto',
                        }}>
                        {data.listarPago.map(
                                (pago) => {
                                    return (
                                        <ItemPago
											serie={pago.serie}
											fecha={pago.fecha}
											tipo={pago.tipoPago.nombre}
											idpedido={pago.pedido.id}
											mesa={pago.pedido.mesa.numero}
                                            url={money}
                                            numero={pago.numero}
                                            monto={pago.monto}
                                            id={pago.id}
                                        />
                                    );
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        )
}