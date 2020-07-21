import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import {QUERY_LISTAR_PRODUCTO} from './ListaProducto'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ListaTiposProducto from './ListadoTiposProducto';

const REGISTRAR_PRODUCTO = gql`
	mutation RegistrarProducto(
            $nombre: String,
            $descripcion: String,
            $cantidad: Int,
            $precio: Float,
            $imagen: String,
            $tipoProducto: Int,
            $receta: String
        ) {
            registrarProducto(
                nombre: $nombre
                descripcion: $descripcion
                cantidad: $cantidad
                precio: $precio
                imagen: $imagen
                tipoProducto: $tipoProducto
                receta: $receta
            ){
                id
                estado
            }
	    }
`;

const MODIFICAR_PRODUCTO = gql`
	mutation ModificarProducto($id: ID!,$nombre: String, $descripcion: String, $cantidad: Int, $precio:Float, $imagen: String, $tipoProducto: ID!) {
		modificarProducto(
			id: $id
			nombre: $nombre
			descripcion: $descripcion
			cantidad: $cantidad
			precio: $precio
			imagen: $imagen
			tipoProducto: $tipoProducto
		){
			id
			estado
		}
	}
`;

export default function FrmProducto(props) {
    const { item, update, initial } = props;
	const [flag, setFlag] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const mutation = item.id
	 	? MODIFICAR_PRODUCTO
	 	: REGISTRAR_PRODUCTO;
		const [execute, { data: datos, called }] = useMutation(mutation);
    
    useEffect(() => {
        if(flag){
            if(datos && datos.modificarProducto) {
                Swal.fire(
                    'Producto modificado correctamente',
                    '',
                    'success'
                )
                update(initial);
                setFlag(false)
            }
            if(datos && datos.registrarProducto) {
                Swal.fire(
                    'Producto registrado correctamente',
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
		setFlag(true);
		execute({
            variables: {
                id: parseInt(item.id),
                nombre: document.getElementById('txtNombre').value,
                descripcion: document.getElementById('txtDescripcion').value,
                cantidad: parseInt(document.getElementById('txtCantidad').value),
                precio: parseFloat(document.getElementById('txtPrecio').value),
                imagen: document.getElementById('txtImagen').value,
                tipoProducto: document.getElementById('cboTipoProducto').value,
                estado: document.getElementById('chkEstado').checked,
            },
            refetchQueries: [
                { query: QUERY_LISTAR_PRODUCTO },
            ],
		})
    };
    
    return (
		<div className='col-lg-6'>
			<div className='card border-0 '>
				<div className='card-body'>
					<h5 className='card-title'>Datos del Producto</h5>
					<form
						className='bg-light p-3 damesa'
						onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="row">
                            <div className="col-lg-5 col-xl-5">
                                <input type="file" className="btn" name="txtImagen" id="txtImagen" />
                                <img src="https://img2.freepng.es/20190608/bwj/kisspng-side-dish-portable-network-graphics-meal-food-meal-png-transparent-images-png-all-5cfbf9ae8ac524.8458123615600173265684.jpg" className="img-fluid img-circle" alt="IMG" />
                            </div>

                            <div className="col-lg-7 col-xl-7">
                                <div className="form-group">
                                    <label htmlFor="cboTipoProducto">Tipo de producto:</label>
                                    <select
                                        name="cboTipoProducto"
                                        id="cboTipoProducto"
                                        ref={register({ required: true })}
                                        value={item.tipoProducto}
                                        onChange={(e) =>
                                            update({
                                                ...item,
                                                tipoProducto: e.target.value,
                                            })
                                        }
                                        className='form-control'
                                    >
                                        <ListaTiposProducto/>
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="txtNombre">Nombre:</label>
                                    <input
                                        type="text"
                                        name="txtNombre"
                                        id="txtNombre"
                                        ref={register({ required: true })}
                                        value={item.nombre}
                                        onChange={(e) =>
                                            update({
                                                ...item,
                                                nombre: e.target.value,
                                            })
                                        }
                                        placeholder="Ingrese el nombre del producto.."
                                        className='form-control'
                                    />
                                    {errors.nombre && errors.nombre.type === 'required' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar un nombre</p>)
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtDescripcion">Descripci&oacute;n:</label>
                                    <textarea
                                        type="text"
                                        name="txtDescripcion"
                                        id="txtDescripcion"
                                        ref={register({ required: true })}
                                        value={item.descripcion}
                                        onChange={(e) =>
                                            update({
                                                ...item,
                                                descripcion: e.target.value,
                                            })
                                        }
                                        placeholder="Ingrese una descripción del producto.."
                                        className="form-control"
                                    />
                                    {errors.descripcion && errors.descripcion.type === 'required' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar una descripción del producto</p>)
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtCantidad">Cantidad:</label>
                                    <input
                                        type="number"
                                        name="txtCantidad"
                                        id="txtCantidad"
                                        ref={register({ required: true, min: 0 })}
                                        value={item.cantidad}
                                        onChange={(e) =>
                                            update({
                                                ...item,
                                                cantidad: e.target.value,
                                            })
                                        }
                                        placeholder="Ingrese el stock del producto..."
                                        className="form-control"
                                    />
                                    {errors.cantidad && errors.cantidad.type === 'required' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar el stock</p>)
                                    }
                                    {errors.cantidad && errors.cantidad.type === 'min' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>El stock debe ser mayor o igual a cero</p>)
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="txtPrecio">Precio:</label>
                                    <input
                                        type="number"
                                        name="txtPrecio"
                                        id="txtPrecio"
                                        ref={register({ required: true, min: 0 })}
                                        value={item.precio}
                                        onChange={(e) =>
                                            update({
                                                ...item,
                                                precio: e.target.value,
                                            })
                                        }
                                        placeholder="Ingrese el precio del producto..."
                                        className="form-control"
                                    />
                                    {errors.precio && errors.precio.type === 'required' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar el precio</p>)
                                    }
                                    {errors.precio && errors.precio.type === 'min' && 
                                        (<p className='mt-1 ml-1' style={{ color: 'red' }}>El precio debe ser mayor o igual a cero</p>)
                                    }
                                </div>

                                <div className='form-group'>
                                    <label htmlFor='chkEstado'>Estado:</label>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox'
                                            name='estado'
                                            id='chkEstado'
                                            ref={register}
                                            checked={item.estado}
                                            onChange={(e) =>
                                                update({
                                                    ...item,
                                                    estado: e.target.checked,
                                                })
                                            }
                                        />
                                        <label
                                            className='form-check-label'
                                            htmlFor='chkEstado'>
                                            Vigente
                                        </label>
                                    </div>
                                </div>
                            </div>
						
                        </div>

                        <div className='text-center'>
							<button className='btn btn-shift' type='submit'>
								{item.id ? 'Modificar' : 'Registrar'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}