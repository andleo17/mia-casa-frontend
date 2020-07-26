import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ProductoPedidoItem from './ProductoPedidoItem';
import { useEffect } from 'react';

export const QUERY_LISTAR_PRODUCTOS_PEDIDOS = gql`
	query buscarPedido($mId: Int!){
		listarMesa( filtro: $mId){
            id
            numero
            pedidoActual{
                id
                productos{
                    cantidad
                    entregado
                    precio
                    producto{
                        id
                        nombre
                        imagen
                        cantidad
                    }
                }
            }
        }
	}
`;

export default function ListaPedido(props) {
    const { idMesa, item, update, initial } = props;
    const mId = parseInt(idMesa);
    const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTOS_PEDIDOS, { variables: { mId } });

    useEffect(() => {
		if (data) {
			update({
                ...item,
                mesaId: data.listarMesa[0].id,
                mesa: {numero: data.listarMesa[0].numero},
                productos: data.listarMesa[0].pedidoActual? data.listarMesa[0].pedidoActual.productos: [],
            });
            console.log(item);
		}
    }, [data]);
    
    if (loading) return <h1>Cargando...</h1>;
    if (error){
        return (
            <h1>
                No se ha podido establecer la conexión con el servidor,
                intentelo nuevamente
            </h1>
       );
    }

    
    return (
        <div className=' nose col-lg-12'  >
            <div className='card-body bg-light reclamof col-lg-12' >

            {/* <div class='card-body'> */}
            <h5 className='card-title d-flex justify-content-around flex-wrap font-weight-bold'> Pedido </h5>
            {/* <div className='input-group d-flex justify-content-around flex-wrap '>
            </div>
            <div
                className='mt-3'
                style={{
                    height: '30rem',
                    overflowY: 'auto',
                }}>
            </div> */}
            <div  style={{
                    height: '90%',
                    overflowY: 'scroll',
                }}
            >
                {data.listarMesa[0].pedidoActual ? data.listarMesa[0].pedidoActual.productos.map((producto) => {
                    return (
                        <ProductoPedidoItem
                            detallePedido={producto}
                            key={producto.cantidad}
                        />
                    );
                }): null}
                
            </div>
            
            </div>
            <div>
                <label htmlFor="" className='row d-flex justify-content-end flex-wrap mr-3 mt-2'>Total: S/ 300</label>
            </div>
            <div className='row d-flex justify-content-end flex-wrap mt-3 mb-3'>
                <button
                    className='btn-dark  mr-3 d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
                    
                >
                    <span className='' >   Cancelar</span>
                </button>
                <button
                    className='btnColor d-flex align-items-center border-0 mr-2 justify-content-center
							text-decoration-none'
                    
                >
                    <span className='' > Confirmar</span>
                </button>
            </div>
        </div>
    )
}