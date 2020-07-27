import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useState } from 'react';
import { useEffect } from 'react';
import { QUERY_LISTAR_PAGO } from '../Pago/ListaPago';
import Swal from 'sweetalert2';
import { QUERY_LISTAR_PEDIDO } from './ListaPedido';
import { useHistory } from 'react-router';
import { QUERY_LISTAR_MESA } from '../Mesa/ListaMesa';

const MUTATION_REGISTRAR_PAGO = gql`
	mutation registrarPago($monto: Float!, $tipoPago: ID!, $pedido: ID!) {
		registrarPago(monto: $monto, tipoPago: $tipoPago, pedido: $pedido) {
			id
		}
	}
`;

export default function FrmNuevoPago(props) {
	const { item, setPayData, initialState } = props;
	const { register, handleSubmit, errors } = useForm();
	const [flag, setFlag] = useState(false);
	const [registrarPago] = useMutation(MUTATION_REGISTRAR_PAGO, {
		refetchQueries: [{ query: QUERY_LISTAR_MESA }],
	});
	const history = useHistory();

	useEffect(() => {
		if (flag) {
			if (registrarPago) {
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Pago registrado correctamente',
					showConfirmButton: false,
					timer: 1000,
				});
				setPayData(initialState);
				setFlag(false);
				history.push('/venta');
			}
		}
	}, [flag, registrarPago, setPayData, initialState, history]);

	const onSubmit = (data) => {
		console.log(data);
		registrarPago({
			variables: {
				monto: parseFloat(data.txtMonto),
				tipoPago: data.cboTipo,
				pedido: data.txtPedido,
			},
			refetchQueries: [
				{ query: QUERY_LISTAR_PAGO },
				{ query: QUERY_LISTAR_PEDIDO },
			],
		});
		setFlag(true);
	};

	return (
		<div className=' mb-3' style={{ width: '100%' }}>
			<div className='card-body'>
				<h5 className='card-title'>Datos del pago</h5>
				<div
					className='card mb-3 ml-4 reclamof'
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
													min: 0,
												},
											})}
											onChange={(e) =>
												setPayData({
													...item,
													numero: e.target.value,
												})
											}
										/>
										{errors.numero &&
											errors.numero.type ===
												'required' && (
												<p
													className='mt-1 ml-1'
													style={{ color: 'red' }}>
													Debe ingresar un número
												</p>
											)}
										{errors.numero &&
											errors.numero.type === 'min' && (
												<p
													className='mt-1 ml-1'
													style={{ color: 'red' }}>
													No se aceptan números
													negativos
												</p>
											)}
									</div>
								</div>
							</div>
							<div className='row justify-content-end'>
								<button
									class='btn-dark mr-3 d-flex p-2 align-items-center border-0 justify-content-center text-decoration-none'
									onClick={() => {
										setPayData(initialState);
									}}>
									Cancelar
								</button>
								<button
									class='mr-3 btnColor d-flex p-2 align-items-center border-0 justify-content-center text-decoration-none'
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
