import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { QUERY_LISTAR_RECLAMO } from './ListaReclamo';
import Swal from 'sweetalert2';

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
    const { item, update, initial} = props;
    const [flag, setFlag] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    console.log(item);
    const mutation = item.id
	 	? MODIFICAR_RECLAMO
	 	: REGISTRAR_RECLAMO;
		const [execute, { data: datos, called, error: queryError }] = useMutation(mutation);

    useEffect(() => {
		if(flag){
			if(datos && datos.modificarReclamo) {
				Swal.fire(
					'Reclamo modificado correctamente',
					'',
					'success'
				)
				update(initial);
				setFlag(false)
			}
			if(datos && datos.registrarReclamo) {
				Swal.fire(
					'Reclamo registrado correctamente',
					'',
					'success'
				)
				update(initial);
				setFlag(false)
            }
		}
		;
	});
    
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
        setFlag(true);
        // update(initial)
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
                                            name='pedido'
                                            id='txtPedido'
                                            placeholder='Seleccione el pedido...'
                                            class='form-control '
                                            ref={register({ required: true})}
                                            value={item.detallePedido.pedido.id}
                                            onChange={(e) =>
                                                update({
                                                    ...item,
                                                    ...item.
                                                    detallePedido.
                                                    pedido,
                                                    id: e.target.value,
                                                })
                                            }
                                            disabled
                                        />
                                        {/* {errors.pedido && errors.pedido.type === 'required' && 
                                            (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe seleccionar un pedido</p>)
                                        }  */}
                                    </div>
                                    <div class=' col-lg-6'>
                                        <label for='txtProducto'>
                                            Producto:
                                        </label>
                                        <select
                                            name='producto'
                                            id='txtProducto'
                                            class='btn border-dark form-control'
                                            ref={register({ required: true})}
                                            // className='form-control btn btn-outline-sistema '
                                            style={{ width: '100%' }}
                                            defaultValue={item.detallePedido.producto.id}
                                            // onChange={(e) =>
                                            //     update({
                                            //         ...item.
                                            //         detallePedido.
                                            //         producto,
                                            //         id: e.target.value,
                                            //     })
                                            // }
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
                                            name='motivo'
                                            id='txtMotivo'
                                            placeholder='Ingrese el motivo...'
                                            ref={register({ required: true})}
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
                                        {errors.motivo && errors.motivo.type === 'required' && 
                                            (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar el motivo y/o seleccionar pedido</p>)
                                        }     
                                    </div>
                                </div>
                            <div class='row justify-content-end pr-3'>
                                <button class=' btnColor d-flex p-2 align-items-center border-0 justify-content-center text-decoration-none'>
                                    {item.id ? 'Modificar' : 'Registrar'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                
            </div>
        // </div>
    );
}

