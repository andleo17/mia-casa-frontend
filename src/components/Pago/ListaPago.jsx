import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPago from './ItemPago';

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
                        
                        {data.listarPedido.map(
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
                            )
                        }
                            
                    </div>
                </div>
            </div>
        )
}