import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPedido from './ItemPedido';

const QUERY_LISTAR_PEDIDO = gql`
    query ListarPedido($pago: Boolean, $mesa: Int) {
        listarPedido(pago: $pago, mesa: $mesa){
            id
            fecha
            personal{
                id
                nombres
                apellidos
            }
            mesa{
                id
                numero
            }
            productos{
                precio
                cantidad
                producto{
                    id
                    nombre
                }
            }
        }
    }
`;

export default function ListaPedido(props){
    const [mesa, setFiltro] = useState(undefined);
    const { loading, error, data, refetch } = useQuery(QUERY_LISTAR_PEDIDO, {
		variables: {
			mesa: parseInt(mesa),
			pago: false,
		},
	});
    const { update, initial } = props;

    if (loading) return <h1>Cargando...</h1>;
	if (error)
		return (
			<h1>
				No se ha podido establecer la conexión con el servidor,
				intentelo nuevamente
			</h1>
        );
    
        return(
                <div className='reclamof bg-light ' style={{ width: '100%', height:'300px' }}>
                <div className='card-body'>
                    <h5 className='card-title d-flex justify-content-around flex-wrap'>Listado de Pedidos</h5>
                    <div className='input-group buscar d-flex justify-content-between flex-wrap'>
                        <input
                            type='number'
                            id='txtbuscar'
                            className='form-control'
                            placeholder='Buscar por mesa...'
                            aria-label='Buscar pedido...'
                            defaultValue={mesa}
                            onChange={(e) => {
								if (e.target.value === '') {
										setFiltro(undefined);
										refetch();
								}
							}}
                            onKeyDown={(e) => {
                                    if (e.keyCode === 13 && !e.shiftKey) {
                                        e.preventDefault();
                                        if (e.target.value === '') {
                                            setFiltro(undefined);
                                            refetch();
                                        } else {
                                            setFiltro(
                                                document.getElementById(
                                                    'txtbuscar'
                                                ).value
                                            );
                                            refetch();
                                        }
                                    }
                            }}
                        />
                    </div>
                    {/* <div className='input-group mb-3 pl-4'>
                        <input
                            type='search'
                            className='form-control'
                            placeholder='Buscar...'
                            aria-label='Busque un pedido...'
                        />
                    </div> */}
                    <div
                        className='pl-4 mt-3'
                        style={{
                            height: '200px',
                            overflowY: 'scroll',
                        }}>
                        
                        {data.listarPedido.map(
                                (pedido) => {
                                    return (
                                        <ItemPedido
                                            url=''
                                            pedido={pedido}
                                            showData= {()=>update(
                                                {
                                                    __typename: 'Reclamo',
                                                    id: '',
                                                    motivo: '',
                                                    detallePedido: {
                                                        __typename: 'DetallePedido',
                                                        producto:{
                                                            __typename: 'Producto',
                                                            id: '',
                                                            nombre:'',
                                                        },
                                                        pedido: {
                                                            __typename: 'Pedido',
                                                            id: pedido.id,
                                                            mesa: {
                                                                __typename: 'Mesa',
                                                                id: '',
                                                                numero: '',
                                                            },
                                                            productos: pedido.productos,
                                                        },
                                                    },
                                                }

                                            )}
                                            key={pedido.id}
                                            initial={initial}
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