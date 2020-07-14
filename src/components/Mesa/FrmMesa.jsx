import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import {QUERY_LISTAR_MESA} from './ListaMesa'

const REGISTRAR_MESA = gql`
	mutation RegistrarMesa($numero: Int!) {
		registrarMesa(numero: $numero) {
			numero
			estado
		}
	}
`;

const MODIFICAR_MESA = gql`
	mutation ModificarMesa($numero: Int!) {
		modificarMesa(numero: $numero) {
			numero
			estado
		}
	}
`;


export default function FrmMesa(props) {
	const { item, update } = props;

	// const mutation = item.id
	// 	? MODIFICAR_MESA
	// 	: REGISTRAR_MESA;
	// const [execute] = useMutation(mutation);

	return (
		<div className='col-lg-6'>
			<div className='card border-0 '>
				<div className='card-body'>
					<h5 className='card-title'>Datos de la mesa</h5>
					<form className='bg-light p-3 damesa'>
						<div className='form-group'>
							<label htmlFor='txtNumero'>Número:</label>
							<input
								type='text'
								name='numero'
								id='txtNumero'
								// value={item.numero}
								// onChange={(e) =>
								// 	update({
								// 		...item,
								// 		numero: e.target.value,
								// 	})
								// }
								placeholder='Ingrese el número de mesa...'
								className='form-control'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='chkEstado'>Estado:</label>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									name='estado'
									id='chkEstado'
								/>
								<label
									className='form-check-label'
									htmlFor='chkEstado'>
									Vigente
								</label>
							</div>
						</div>
						<div className='text-center'>
							<button className='btn btn-shift' type='button'
							// onClick={() =>
							// 	execute({
							// 		variables: {
							// 			input: {
							// 				date: document.getElementById(
							// 					'txtNumero'
							// 				).value,
							// 				state: document.getElementById(
							// 					'chkEstado'
							// 				).checked,
							// 			},
							// 		},
							// 		refetchQueries: [
							// 			{ query: QUERY_LISTAR_MESA },
							// 		],
							// 	})
							// }
							>
								Registrar
							</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
}
