import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemPedido from './ItemPedido';
import dish from '../../assets/dish.png';

export const QUERY_LISTAR_PEDIDO = gql`
query ListarPedido {
    listarPedido{
        id
        mesa{
            id
            numero
        }
        productos{
          precio
        }
    }
}
`;

export default function ListaPedido(props)  {
    const { loading, error, data } = useQuery(QUERY_LISTAR_PEDIDO);
    const { setPayData, initialState } = props;
    // this.state = {monto: 0, numeropago: ""};   

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
                                            monto={pedido.productos.reduce(
                                                (sum, p) => sum + p.precio,
                                                0
                                            )}
                                            id={pedido.id}
                                            setData={ () => setPayData(
                                                {
                                                    numero:pedido.mesa.numero,
                                                    monto:pedido.productos.reduce(
                                                        (sum, p) => sum + p.precio,
                                                        0
                                                    )
                                                }
                                            )
                                            }
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