import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {QUERY_LISTAR_MESA} from './ListaMesa'
import { useForm } from 'react-hook-form';

const REGISTRAR_MESA = gql`
	mutation RegistrarMesa($numero: Int!) {
		registrarMesa(numero: $numero) {
			numero
			estado
		}
	}
`;

const MODIFICAR_MESA = gql`
	mutation ModificarMesa($id: ID!,$numero: Int, $estado: Boolean) {
			modificarMesa(id: $id, numero: $numero, estado: $estado) {
				numero
				estado
			}
	}
`;


export default function FrmMesa(props) {
	const { item, update } = props;
	const { register, handleSubmit, errors } = useForm();
  	const onSubmit = data => console.log(errors);
	
	  // const mutation = item.id
	// 	? MODIFICAR_MESA
	// 	: REGISTRAR_MESA;
	// const [execute] = useMutation(mutation);

	return (
		<div className='col-lg-6'>
			<div className='card border-0 '>
				<div className='card-body'>
					<h5 className='card-title'>Datos de la mesa</h5>
					<form className='bg-light p-3 damesa'  onSubmit={handleSubmit(onSubmit)}>
						<div className='form-group'>
							<label htmlFor='txtNumero'>Número:</label>
							<input
								type='number'
								name='numero'
								id='txtNumero'
								ref={register({ required: true })}
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
							{errors.numero && <p className='mt-1 ml-1' style={{ color: 'red' }}>Debe ingresar un número</p>}
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
						<div className='text-center'>
							<button className='btn btn-shift' type='submit'
							// onClick={() =>
							// 	modificar({
							// 		variables: {
							// 				id: parseInt(item.id),
							// 				numero: document.getElementById('txtNumero').value,
							// 				estado: document.getElementById('chkEstado').checked,
							// 		},
							// 		refetchQueries: [
							// 			{ query: QUERY_LISTAR_MESA },
							// 		],
							// 	})
							// }
							>
								{item.id ? 'Modificar' : 'Registrar'}
							</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
}
