import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import { useEffect } from 'react';
import { QUERY_LISTAR_PAGO } from '../Pago/ListaPago';
import { QUERY_LISTAR_PEDIDO } from '../Pago/ListaPedido';
import Swal from 'sweetalert2';

const MUTATION_ELIMINAR_PAGO = gql`
	mutation eliminarPago($id: ID!) {
		eliminarPago(id: $id) {
			serie
		}
	}
`;

export default function ItemPago(props) {
	const { monto, url, serie, fecha, tipo, idpedido, mesa, id } = props;
	const [eliminarPago] = useMutation(MUTATION_ELIMINAR_PAGO);
	const [flag, setFlag] = useState(false);

	useEffect(() => {
		if (flag) {
			if (eliminarPago) {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Pago eliminado correctamente',
					showConfirmButton: false,
					timer: 1000,
				});
				setFlag(false);
			}
		}
	}, [eliminarPago, flag]);

	return (
		<div className='card listaBorde mb-3'>
			<div className='card-body'>
				<div className='row'>
					<div className='col-2 row align-items-center'>
						<img src={url} className='img-fluid' alt='pago' />
					</div>
					<div className='col-6'>
						<h5 className='colorLetra'>Pago {id}</h5>
						<span className='colorLetra2'>Monto: {monto}</span>
						<br />
					</div>
					<div className='col-4 col-btn align-self-end'>
						<button
							className='btn border-0 rounded-circle p-2 ml-2'
							style={{ width: '43px', background: '#BFE6E0' }}
							onClick={() =>
								Swal.fire({
									title: '<strong> Pago ' + id + ' </strong>',
									html:
										'<ul class="list-group list-group-flush" > <li class="list-group-item">  <b>Numero de serie:</b> ' +
										serie +
										'</li>' +
										' <li class="list-group-item"> <b>Pedido numero:</b> ' +
										idpedido +
										'</li>' +
										' <li class="list-group-item"> <b>Mesa numero:</b> ' +
										mesa +
										'</li>' +
										' <li class="list-group-item"> <b>Fecha del pago:</b> ' +
										fecha +
										'</li>' +
										' <li class="list-group-item"> <b>Monto del pedido:</b> S/.' +
										monto +
										'</li>' +
										' <li class="list-group-item"> <b>Tipo de pago:</b> ' +
										tipo +
										'</li> </ul>',
									showCloseButton: true,
									focusConfirm: false,
									confirmButtonText:
										'<i class="fa fa-thumbs-up"></i> Revisado',
									confirmButtonAriaLabel: 'Thumbs up, great!',
								})
							}>
							<i className='fa fa-search'></i>
						</button>
						<button
							className='btn border-0 rounded-circle p-2 ml-2'
							style={{ width: '43px', background: '#BFE6E0' }}
							onClick={() => {
								eliminarPago({
									variables: { id: parseInt(id) },
									refetchQueries: [
										{
											query: QUERY_LISTAR_PAGO,
										},
										{
											query: QUERY_LISTAR_PEDIDO,
										},
									],
								});
								setFlag(true);
							}}>
							<i className='fa fa-trash'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
