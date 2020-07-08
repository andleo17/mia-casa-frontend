import React from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className='row'>
			<div
				className='col-lg-6 col-xl-6'
				style={{ backgroundColor: '#E4E4E4' }}>
				<img
					src={process.env.PUBLIC_URL + '/logo.png'}
					alt='logo'
					className='img-fluid'
				/>
			</div>

			<div className='col-lg-6 col-xl-6'>
				<div className='row justify-content-end'>
					<div className='col-8 text-center'>
						<h1>Iniciar Sesión</h1>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className='input-group flex-nowrap mb-3'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>
										<i className='fa fa-user'></i>
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
							<div className='input-group flex-nowrap mb-3'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>
										<i className='fa fa-key'></i>
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
							<button className='btn btn-shift' type='submit'>
								Iniciar Sesión
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
