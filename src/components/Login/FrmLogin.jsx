import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router';


export const LOGIN_QUERY = gql`
	query LoginQuery($usuario: String!, $clave: String!) {
		login(usuario: $usuario, clave: $clave) {
			token
			personal {
				id
				nombres
				apellidos
			}
		}
	}
`;


export default function FrmLogin() {

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = () => login({ variables: { usuario, clave } });

	const [usuario, setUsuario] = useState('');
	const [clave, setClave] = useState('');

	const [login, { loading, data, error }] = useLazyQuery(LOGIN_QUERY);

	if (loading) return <h1>Cargando...</h1>;

	if (data) {
		localStorage.setItem('user', JSON.stringify(data.login));
		localStorage.setItem('auth-token', data.login.token)
		return <Redirect to='/' />;
	}

	if (error){
		alert(error.message)
	}

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
							value={usuario}
							onChange={(e) => setUsuario(e.target.value)}
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
							value={clave}
							onChange={(e) => setClave(e.target.value)}
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
