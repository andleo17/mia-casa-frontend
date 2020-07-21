import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_LISTAR_RECLAMO } from './ListaReclamo';

const REGISTRAR_RECLAMO = gql`
	mutation RegistrarReclamo($motivo: String!, $pedido: ID!, $producto: ID!) {
		registrarReclamo(motivo: $motivo, pedido: $pedido, producto: $producto) {
			id
            motivo
            detallePedido{
                producto{
                    id
                }
            }
		}
    }
`;

const MODIFICAR_RECLAMO = gql`
	mutation ModificarReclamo($id: ID!, $motivo: String!) {
		modificarReclamo(id: $id, motivo: $motivo) {
			id
            motivo
            detallePedido{
                producto{
                    id
                    nombre
                }
            }
        }
    }
`;

export default function NuevoReclamo(props){
    const { item, update} = props;

    const { register, handleSubmit, errors } = useForm();

    const mutation = item.id
	 	? MODIFICAR_RECLAMO
	 	: REGISTRAR_RECLAMO;
		const [execute, { data: datos, called }] = useMutation(mutation);

    const onSubmit = data => {
		
		execute({
					// variables: {
					// 		id: parseInt(item.id),
					// 		motivo: document.getElementById('txtMotivo').value,
                    //         pedido: parseInt(document.getElementById('txtPedido').value),
                    //         producto: parseInt(document.getElementById('txtProducto').value),
					// },
					// refetchQueries: [
					// 	{ query: QUERY_LISTAR_RECLAMO },
					
					// ],
		})
	};
    return (
        <div class='card mb-3' style={{ width: '100%' }}>
            <div class='card-body'>
                <h5 class='card-title'>Datos del reclamo</h5>
                <form action="" clasName="className='bg-light p-3 damesa'" onSubmit={handleSubmit(onSubmit)}>
                    <div
                        class='card bg-light mb-3 ml-4'
                        style={{ width: '95%' }}>
                        <div class='card-body'>
                            <div class='row'>
                                <div class='col-lg-6 col-xl-6'>
                                    <div class='form-group'>
                                        <label for='txtPedido'>
                                            Pedido:
                                        </label>
                                        <input
                                            type='text'
                                            name='txtPedido'
                                            id='txtPedido'
                                            placeholder='Seleccione el pedido...'
                                            class='form-control'
                                            value={item.detallePedido.pedido.id}
                                            onChange={(e) =>
                                                update({
                                                    ...item,
                                                    id: e.target.value,
                                                })
                                            }
                                            disabled
                                        />
                                    </div>
                                    <div class='form-group'>
                                        <label for='txtProducto'>
                                            Producto:
                                        </label>
                                        <select
                                            name=''
                                            id='txtProducto'
                                            class='btn'
                                            // className='form-control btn btn-outline-sistema '
                                            style={{ width: '100%' }}
                                            value={item.detallePedido.producto.id}
                                        // value={nombreLi}
                                        >

                                            {item.detallePedido.pedido.productos.map(
                                                    (detallePedido) => {
                                                        return (
                                                            <option value={detallePedido.producto.id}> {detallePedido.producto.nombre}</option>
                                                        );
                                                    }
                                                )
                                            }
                                        {/* <option value=''> {item.productos}</option>  */}

                                        </select>
                                        {/* <input
                                            type='text'
                                            name='txtProducto'
                                            id='txtProducto'
                                            placeholder='Ingrese el producto...'
                                            class='form-control'
                                        /> */}
                                    </div>
                                </div>
                                <div class='col-lg-6 col-xl-6'>
                                    <div class='form-group'>
                                        <label for='txtMotivo'>
                                            Motivo:
                                        </label>
                                        <textarea
                                            name='txtMotivo'
                                            id='txtMotivo'
                                            placeholder='Ingrese el pedido...'
                                            value= {item.motivo}
                                            class='form-control'
                                            onChange={(e) =>
                                                update({
                                                    ...item,
                                                    motivo: e.target.value,
                                                })
                                            }
                                        >     
                                        </textarea>
                                            
                                    </div>
                                </div>
                            </div>
                            <div class='row justify-content-end'>
                                <button class='btn btn-shift mr-3'>
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

