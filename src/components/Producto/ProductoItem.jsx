import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {QUERY_LISTAR_PRODUCTO} from './ListaProducto'


const ELIMINAR_PRODUCTO = gql`
	mutation EliminarProducto($id: ID!) {
		eliminarProducto(id: $id) {
			id
		}
	}
`;

const DAR_BAJA_PRODUCTO = gql`
	mutation ModificarProducto($id: ID!) {
		modificarProducto(
			id: $id
			estado: false
		){
			id
			estado
		}
	}
`;


export default function ProductoItem({ producto, url, showData,  props }) {

	const [eliminarProducto] = useMutation(ELIMINAR_PRODUCTO);
	const [darBajaProducto] = useMutation(DAR_BAJA_PRODUCTO);

	return (
		<div className='card listaBorde mb-3'>
			<div className='card-body'>
				<div className='row'>
					<div className='col-xl-2 col-lg-2 text-center'>
						<img
							src={process.env.PUBLIC_URL + "source/producto/" + producto.imagen}
							className='img-fluid'
							alt='producto'
						/>
					</div>
					<div className='col-xl-6 col-lg-6 mb-3'>
						<h4>{producto.nombre}</h4>
						<span>Tipo: {producto.tipoProducto.nombre}</span>
						<br />
						<span>
							Estado: {producto.estado ? 'Vigente' : 'No Vigente'}, Precio: s/{producto.precio}
						</span>
					</div>
					<div className='col-lg-4'>
						<div className=' row d-flex justify-content-around flex-wrap '>
							<button
								type='button'
								className=' btn border-0 circuloverde rounded-circle p-2'
								onClick={
									()=>{
										showData()
									}
								}
								style={{ background: '#BFE6E0' }}>
								<i className='fa fa-pen m-0' />
							</button>
							<button className=' btn border-0 circuloverde rounded-circle p-2' style={{ background: '#BFE6E0'}}
								onClick={() =>
									darBajaProducto({
										variables: { id: parseInt(producto.id), estado: false },
										refetchQueries: [
											{
												query: QUERY_LISTAR_PRODUCTO,
											},
										],
									})
								}
							>
								<i className='fa fa-ban' />
							</button>
							<button className='btn border-0 circuloverde rounded-circle p-2' style={{ background: '#BFE6E0'}}
								onClick={() =>
									eliminarProducto({
										variables: { id: parseInt(producto.id) },
										refetchQueries: [
											{
												query: QUERY_LISTAR_PRODUCTO,
											},
										],
									})
								}
							>
								<i className='fa fa-trash' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
