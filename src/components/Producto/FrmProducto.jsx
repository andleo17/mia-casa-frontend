import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import { QUERY_LISTAR_PRODUCTO } from './ListaProducto';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import ListaTiposProducto from './ListadoTiposProducto';

const REGISTRAR_PRODUCTO = gql`
	mutation RegistrarProducto(
		$nombre: String!
		$descripcion: String!
		$cantidad: Int!
		$precio: Float!
		$imagen: String!
		$tipoProducto: ID!
		$receta: [InsumoProductoInput!]!
	) {
		registrarProducto(
			nombre: $nombre
			descripcion: $descripcion
			cantidad: $cantidad
			precio: $precio
			imagen: $imagen
			tipoProducto: $tipoProducto
			receta: $receta
		) {
			id
			estado
		}
	}
`;

const MODIFICAR_PRODUCTO = gql`
	mutation ModificarProducto(
		$id: ID!
		$nombre: String!
		$descripcion: String!
		$cantidad: Int!
		$precio: Float!
		$imagen: String!
		$estado: Boolean!
		$tipoProducto: ID!
	) {
		modificarProducto(
			id: $id
			nombre: $nombre
			descripcion: $descripcion
			cantidad: $cantidad
			precio: $precio
			imagen: $imagen
			estado: $estado
			tipoProducto: $tipoProducto
		) {
			id
			estado
		}
	}
`;

export default function FrmProducto(props) {
	const { item, update, initial } = props;
	const [flag, setFlag] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const mutation = item.id ? MODIFICAR_PRODUCTO : REGISTRAR_PRODUCTO;
	const [execute, { data: datos }] = useMutation(mutation);

	useEffect(() => {
		if (flag) {
			if (datos && datos.modificarProducto) {
				Swal.fire('Producto modificado correctamente', '', 'success');
				update(initial);
				setFlag(false);
			}
			if (datos && datos.registrarProducto) {
				Swal.fire('Producto registrado correctamente', '', 'success');
				update(initial);
				setFlag(false);
			}
		}
	});

	const onSubmit = (data) => {
		setFlag(true);
		execute({
			variables: {
				id: parseInt(item.id),
				nombre: data.nombre,
				descripcion: data.descripcion,
				cantidad: parseInt(data.cantidad),
				precio: parseFloat(data.precio),
				imagen: '',
				tipoProducto: data.tipoProducto,
				estado: data.estado,
				receta: [],
			},
			refetchQueries: [{ query: QUERY_LISTAR_PRODUCTO }],
		});
	};

	return (
		<div className='col-lg-6'>
			<div className='card border-0 '>
				<div className='card-body'>
					<h5 className='card-title'>Datos del Producto</h5>
					<form
						className='bg-light p-3 damesa'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='row'>
							<div className='col-lg-5 col-xl-5'>
								<label
									htmlFor='txtImagen'
									style={{
										position: 'absolute',
										borderRadius: '50%',
									}}
									className='btn btn-shift'>
									<i className='fa fa-pen'></i>
								</label>
								<input
									type='file'
									name='txtImagen'
									id='txtImagen'
									onChange={(e) =>
										update({
											...item,
											imagen: e.target.value,
										})
									}
									className='btn'
									style={{
										width: '0px',
										height: '0px',
										visibility: 'hidden',
										position: 'absolute',
									}}
								/>
								<img
									src={
										process.env.PUBLIC_URL +
										'source/producto/' +
										item.imagen
									}
									className='img-fluid img-circle'
									alt='IMG'
								/>
							</div>

							<div className='col-lg-7 col-xl-7'>
								<div className='form-group'>
									<label htmlFor='cboTipoProducto'>
										Tipo de producto:
									</label>
									<select
										name='tipoProducto'
										id='cboTipoProducto'
										ref={register({ required: true })}
										value={item.tipoProducto.id}
										onChange={(e) =>
											update({
												...item,
												tipoProducto: {id: e.target.value},
											})
										}
										className='form-control'>
										<ListaTiposProducto />
									</select>
								</div>

								<div className='form-group'>
									<label htmlFor='txtNombre'>Nombre:</label>
									<input
										type='text'
										name='nombre'
										id='txtNombre'
										ref={register({ required: true })}
										value={item.nombre}
										onChange={(e) =>
											update({
												...item,
												nombre: e.target.value,
											})
										}
										placeholder='Ingrese el nombre del producto..'
										className='form-control'
									/>
									{errors.nombre &&
										errors.nombre.type === 'required' && (
											<p className='mt-1 ml-1 text-danger'>
												Debe ingresar un nombre
											</p>
										)}
								</div>

								<div className='form-group'>
									<label htmlFor='txtDescripcion'>
										Descripci&oacute;n:
									</label>
									<textarea
										type='text'
										name='descripcion'
										id='txtDescripcion'
										value={item.descripcion}
										onChange={(e) =>
											update({
												...item,
												descripcion: e.target.value,
											})
										}
										ref={register({ required: true })}
										placeholder='Ingrese una descripción del producto..'
										className='form-control'
									/>
									{errors.descripcion &&
										errors.descripcion.type ===
											'required' && (
											<p className='mt-1 ml-1 text-danger'>
												Debe ingresar una descripción
												del producto
											</p>
										)}
								</div>

								<div className='form-group'>
									<label htmlFor='txtCantidad'>
										Cantidad:
									</label>
									<input
										type='number'
										name='cantidad'
										id='txtCantidad'
										value={item.cantidad}
										onChange={(e) =>
											update({
												...item,
												cantidad: e.target.value,
											})
										}
										ref={register({
											required: true,
											min: 0,
										})}
										placeholder='Ingrese el stock del producto...'
										className='form-control'
									/>
									{errors.cantidad &&
										errors.cantidad.type === 'required' && (
											<p className='mt-1 ml-1 text-danger'>
												Debe ingresar el stock
											</p>
										)}
									{errors.cantidad &&
										errors.cantidad.type === 'min' && (
											<p className='mt-1 ml-1 text-danger'>
												El stock debe ser mayor o igual
												a cero
											</p>
										)}
								</div>

								<div className='form-group'>
									<label htmlFor='txtPrecio'>Precio:</label>
									<input
										type='text'
										name='precio'
										id='txtPrecio'
										ref={register({
											required: true,
											min: 1,
										})}
										value={item.precio}
										onChange={(e) =>
											update({
												...item,
												precio: e.target.value,
											})
										}
										placeholder='Ingrese el precio del producto...'
										className='form-control'
									/>
									{errors.precio &&
										errors.precio.type === 'required' && (
											<p className='mt-1 ml-1 text-danger'>
												Debe ingresar el precio
											</p>
										)}
									{errors.precio &&
										errors.precio.type === 'min' && (
											<p className='mt-1 ml-1 text-danger'>
												El precio debe ser mayor o igual
												a cero
											</p>
										)}
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
