import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { useEffect } from 'react';
import { useState } from 'react';
import {QUERY_LISTAR_MESA} from './ListaMesa'
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { initialState } from '../../pages/Mesa';

const REGISTRAR_MESA = gql`
	mutation RegistrarMesa($numero: Int!) {
		registrarMesa(numero: $numero) {
			numero
			estado
		}
	}
`;

const MODIFICAR_MESA = gql`
	mutation ModificarMesa($id: ID!, $numero: Int, $estado: Boolean) {
		modificarMesa(id: $id, numero: $numero, estado: $estado) {
			numero
			estado
		}
	}
`;

export default function FrmMesa(props) {
	const { item, update, initial } = props;
	const [flag, setFlag] = useState(false);
	const { register, handleSubmit, errors } = useForm();
	const mutation = item.id
	 	? MODIFICAR_MESA
	 	: REGISTRAR_MESA;
		const [execute, { data: datos, called }] = useMutation(mutation);
	
	useEffect(() => {
		if(flag){
			if(datos && datos.modificarMesa) {
				Swal.fire(
					'Mesa modificada correctamente',
					'',
					'success'
				)
				update(initial);
				setFlag(false)
			}
			if(datos && datos.registrarMesa) {
				Swal.fire(
					'Mesa registrada correctamente',
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
							numero: parseInt(document.getElementById('txtNumero').value),
							estado: document.getElementById('chkEstado').checked,
					},
					refetchQueries: [
						{ query: QUERY_LISTAR_MESA },
					
					],
		})
	};
	
	return (
		<div className='col-lg-6'>
			<div className='card border-0 '>
				<div className='card-body'>
					<h5 className='card-title'>Datos de la mesa</h5>
					<form
						className='bg-light p-3 damesa'
						onSubmit={handleSubmit(onSubmit)}>
						<div className='form-group'>
							<label htmlFor='txtNumero'>Número:</label>
							<input
								type='number'
								name='numero'
								id='txtNumero'
								ref={register({ required: true, min: 0, max: 1000 })}
								value={item.numero}
								onChange={(e) =>
									update({
										...item,
										numero: e.target.value,
									})
								}
								placeholder='Ingrese el número de mesa...'
								className='form-control'
							/>
							{errors.numero && errors.numero.type === 'required' && 
								(<p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar un número</p>)
							}
							{errors.numero && errors.numero.type === 'min' && 
								(<p className='mt-1 ml-1' style={{ color: 'red' }}>No se aceptan números negativos</p>)
							}
							{errors.numero && errors.numero.type === 'max' && 
								(<p className='mt-1 ml-1' style={{ color: 'red' }}>Excede el número permitido</p>)
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
						<div className='d-flex justify-content-around flex-wrap'>
							<button className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none' type='submit'>
								{item.id ? 'Modificar' : 'Registrar'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
