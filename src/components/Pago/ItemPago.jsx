import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_LISTAR_PAGO } from '../Pago/ListaPago';

const MUTATION_ELIMINAR_PAGO = gql`
	mutation eliminarPago($id: ID!) {
		eliminarPago(id: $id) {
			serie
		}
	}
`;

export default function ItemPago(props) {
	const { numero, monto, url } = props;
	const [eliminarPago] = useMutation(MUTATION_ELIMINAR_PAGO);
	const handleClick = (data) =>{
		console.log(data)
		eliminarPago({
			variables: {
				id: numero
			},
			refetchQueries: [{ query: QUERY_LISTAR_PAGO }],
		});
	}

	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='row'>
					<div className='col-2 row align-items-center'>
						<img
							src={url}
							className='img-fluid'
							alt='pago'
						/>
					</div>
					<div className='col-6'>
						<h4>Pago {numero}</h4>
						<span>Monto: {monto}</span>
						<br />
					</div>
					<div className='col-4 col-btn align-self-end'>
						<button className='btn btn-primary btn-accion btn-circle'>
							<i className='fa fa-search'></i>
						</button>
						<button className='btn btn-danger btn-accion btn-circle' onClick={handleClick}>
							<i className='fa fa-trash'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
	
}
