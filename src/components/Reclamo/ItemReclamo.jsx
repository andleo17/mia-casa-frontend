import React, { Component } from 'react';
import imgReclamo from '../../assets/reclamo.png';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {QUERY_LISTAR_RECLAMO} from './ListaReclamo'

const ELIMINAR_RECLAMO = gql`
	mutation EliminarReclamo($id: ID!) {
		eliminarReclamo(id: $id) {
			id
		}
	}
`;


export default function ItemReclamo({reclamo, showData, props}){
	
	const [eliminarReclamo] = useMutation(ELIMINAR_RECLAMO);

	return (
		<div class='card mb-3'>
			<div class='card-body'>
				<div class='row'>
					<div class='col-2 row align-items-center ml-2'>
						<img
							src={imgReclamo}
							class='img-fluid'
							alt='Responsive'
						/>
					</div>
					<div class='col-6'>
						<h4>Reclamo N° {reclamo.id}</h4>
						<h6>Pedido {reclamo.detallePedido.pedido.id}</h6>
						<label>Producto: {reclamo.detallePedido.producto.nombre}</label>
					</div>
					<div class='col-4 col-btn align-self-center'>
						<button
							type='button'
							className=' btn border-0 rounded-circle p-2'
							onClick={
									showData
							}
							style={{ background: '#BFE6E0', width:'43px' }}>
							<i className='fa fa-pen m-0' />
						</button>
						<button className='btn border-0 rounded-circle p-2 ml-2' style={{ background: '#BFE6E0', width:'43px'  }}
							onClick={() =>
								eliminarReclamo({
									variables: { id: parseInt(reclamo.id) },
									refetchQueries: [
										{
											query: QUERY_LISTAR_RECLAMO,
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
	);
}

