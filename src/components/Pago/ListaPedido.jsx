import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPedido from './ItemPedido';
import dish from '../../assets/dish.png';

const QUERY_LISTAR_PEDIDO = gql`
    query ListarPedido {
        listarPedido{
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

export default function ListaPedido(){
    const { loading, error, data } = useQuery(QUERY_LISTAR_PEDIDO);

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
                                            url={dish}
                                            numero={
                                                pedido.mesa.numero
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