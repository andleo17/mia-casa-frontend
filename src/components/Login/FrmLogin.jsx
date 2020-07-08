import React from 'react';
import { useForm } from 'react-hook-form';

export default function FrmLogin() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className='col login-form'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Iniciar Sesión</h1>
				<div className='my-5'>
					<div className='input-group mb-4'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-user' />
							</span>
						</div>
						<input
							type='text'
							name='username'
							className={`form-control ${
								errors.username && 'is-invalid'
							}`}
							placeholder='Username'
							ref={register({
								required: {
									value: true,
									message: 'Ingrese un usuario',
								},
							})}
						/>
						{errors.username && (
							<div className='invalid-feedback'>
								{errors.username.message}
							</div>
						)}
					</div>
					<div className='input-group'>
						<div className='input-group-prepend'>
							<span className='input-group-text'>
								<i className='fa fa-key' />
							</span>
						</div>
						<input
							type='password'
							name='password'
							className={`form-control ${
								errors.username && 'is-invalid'
							}`}
							placeholder='Password'
							ref={register({
								required: {
									value: true,
									message: 'Ingrese una contraseña',
								},
							})}
						/>
						{errors.password && (
							<div className='invalid-feedback'>
								{errors.password.message}
							</div>
						)}
					</div>
				</div>
				<button className='btn' type='submit'>
					Iniciar Sesión
				</button>
			</form>
		</div>
	);
}
