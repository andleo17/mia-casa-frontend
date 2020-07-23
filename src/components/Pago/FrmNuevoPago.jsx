import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_LISTAR_PAGO } from '../Pago/ListaPago';

const MUTATION_REGISTRAR_PAGO = gql`
	mutation registrarPago($monto: Float!, $tipoPago: ID!, $pedido: ID!) {
		registrarPago(monto: $monto, tipoPago: $tipoPago, pedido: $pedido) {
			id
		}
	}
`;

export default function FrmNuevoPago(props) {
	const { item, setPayData } = props;
	const { register, handleSubmit } = useForm();
	const [registrarPago] = useMutation(MUTATION_REGISTRAR_PAGO);
	const onSubmit = (data) => {
		console.log(data);
		registrarPago({
			variables: {
				monto: parseFloat(data.txtMonto),
				tipoPago: data.cboTipo,
				pedido: data.txtPedido,
			},
			refetchQueries: [{ query: QUERY_LISTAR_PAGO }],
		});
	};

	return (
		<div className='card mb-3' style={{ width: '100%' }}>
			<div className='card-body'>
				<h5 className='card-title'>Datos del pago</h5>
				<div
					className='card bg-light mb-3 ml-4'
					style={{ width: '95%' }}>
					<div className='card-body'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='row'>
								<div className='col-lg-6 col-xl-6'>
									<div className='form-group'>
										<label>Monto a pagar:</label>
										<input
											type='number'
											disabled
											value={item.monto}
											name='txtMonto'
											id='txtMonto'
											className='form-control'
											ref={register({
												required: {
													value: true,
												},
											})}
										/>
									</div>
									<div className='form-group'>
										<label htmlFor='cboTipo'>
											Tipo de pago:
										</label>
										<select
											// ver la documentacion
											name='cboTipo'
											id='cboTipo'
											className='form-control'
											ref={register({
												required: {
													value: true,
												},
											})}>
											<option value='1'>Efectivo</option>
											<option value='2'>Tarjeta</option>
										</select>
									</div>
								</div>
								<div className='col-lg-6 col-xl-6'>
									<div className='form-group'>
										<label htmlFor='txtPedido'>
											Pedido:
										</label>
										<input
											type='number'
											name='txtPedido'
											disabled
											value={item.numero}
											id='txtPedido'
											className='form-control'
											ref={register({
												required: {
													value: true,
												},
											})}
										/>
									</div>
								</div>
							</div>
							<div className='row justify-content-end'>
								<button
									class=' btnColor d-flex p-2 align-items-center border-0 justify-content-center text-decoration-none'
									type='submit'>
									Registrar
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
