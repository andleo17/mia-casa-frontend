import React from 'react';

export default function FrmMesa() {
	return (
		<div className='col'>
			<div className='card h-100'>
				<div className='card-body'>
					<h5 className='card-title'>Datos de la mesa</h5>
					<form className='bg-light p-3'>
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
					</form>
				</div>
			</div>
		</div>
	);
}
