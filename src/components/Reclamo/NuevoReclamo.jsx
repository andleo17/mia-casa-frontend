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
					variables: {
							id: parseInt(item.id),
							motivo: document.getElementById('txtMotivo').value,
                            pedido: parseInt(document.getElementById('txtPedido').value),
                            producto: parseInt(document.getElementById('txtProducto').value),
					},
					refetchQueries: [
						{ query: QUERY_LISTAR_RECLAMO },
					
					],
		})
	};
    return (
        <div class=' ' style={{ width: '100%' }}>
            {/* <div class='card-body'> */}
                <h2 class='card-title font-weight-bold m-2'>Nuevo reclamo</h2>
                <form action="" clasName="className=' damesa'" onSubmit={handleSubmit(onSubmit)}>
                    <div
                        class='reclamof mb-4 bg-light'
                        >
                        <div class='card-body'>
                                <div class='row'>
                                    <div class='col-lg-6'>
                                        <label for='txtPedido'>
                                            Pedido:
                                        </label>
                                        <input
                                            type='text'
                                            name='txtPedido'
                                            id='txtPedido'
                                            // placeholder='Seleccione el pedido...'
                                            class='form-control '
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
                                    <div class=' col-lg-6'>
                                        <label for='txtProducto'>
                                            Producto:
                                        </label>
                                        <select
                                            name=''
                                            id='txtProducto'
                                            class='btn border-dark form-control'
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
                                <div class='row'>
                                    <div class='form-group col-12'>
                                        <label for='txtMotivo'>
                                            Motivo:
                                        </label> <br/>
                                        <textarea
                                            name='txtMotivo'
                                            id='txtMotivo'
                                            placeholder='Ingrese el pedido...'
                                            value= {item.motivo}
                                            class='form-control col-12 border-bottom'
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
                            <div class='row justify-content-end pr-3'>
                                <button class=' btnColor d-flex p-2 align-items-center border-0 justify-content-center text-decoration-none'>
                                    Registrar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        // </div>
    );
}

