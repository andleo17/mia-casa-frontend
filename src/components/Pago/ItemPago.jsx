import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_LISTAR_PAGO } from '../Pago/ListaPago';
import Swal from 'sweetalert2'

const MUTATION_ELIMINAR_PAGO = gql`
	mutation eliminarPago($id: ID!) {
		eliminarPago(id: $id) {
			serie
		}
	}
`;

export default function ItemPago(props) {
	const { numero, monto, url, serie, fecha, tipo, idpedido, mesa, id } = props;
	const [eliminarPago] = useMutation(MUTATION_ELIMINAR_PAGO);

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
						<h4>Pago {id}</h4>
						<span>Monto: {monto}</span>
						<br />
					</div>
					<div className='col-4 col-btn align-self-end'>
						<button className='btn btn-primary btn-accion btn-circle' onClick={() =>
								Swal.fire({
									title: '<strong> Pago ' + id + ' </strong>',
									html:
									  '<ul> <li>  <b>Numero de serie:</b> ' + serie + '</li>'  +
									  ' <li> <b>Pedido numero:</b> ' + idpedido + '</li>'  + 
									  ' <li> <b>Mesa numero:</b> ' + mesa + '</li>'  + 
									  ' <li> <b>Fecha del pago:</b> ' + fecha + '</li>'  +
									  ' <li> <b>Tipo de pago:</b> ' + tipo + '</li> </ul>' 
									,
									showCloseButton: true,
									focusConfirm: false,
									confirmButtonText:
									  '<i class="fa fa-thumbs-up"></i> Revisado',
									confirmButtonAriaLabel: 'Thumbs up, great!'
								  })
							}>
							<i className='fa fa-search'></i>
						</button>
						<button className='btn btn-danger btn-accion btn-circle' onClick={() =>
								eliminarPago({
									variables: { id: parseInt(id) },
									refetchQueries: [
										{
											query: QUERY_LISTAR_PAGO,
										},
									],
								})
							}>
							<i className='fa fa-trash'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
	
}
