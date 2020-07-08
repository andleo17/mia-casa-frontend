import React from 'react';

export default function FrmMesa() {
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
							<button className='btn btn-shift' type='button'>
								Registrar
							</button>
						</div>

					</form>
				</div>
			</div>
		</div>
	);
}
