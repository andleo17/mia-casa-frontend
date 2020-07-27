import React from 'react';
import { useForm } from 'react-hook-form';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import { useEffect } from 'react';

export const LOGIN_QUERY = gql`
	query LoginQuery($usuario: String!, $clave: String!) {
		login(usuario: $usuario, clave: $clave) {
			token
			personal {
				id
				nombres
				apellidos
				credencial {
					rol
				}
			}
		}
	}
`;

export default function FrmLogin() {
	const { register, handleSubmit, errors } = useForm();
	const [login, { data, error }] = useLazyQuery(LOGIN_QUERY);
	const history = useHistory();

	const onSubmit = ({ usuario, clave }) => {
		login({ variables: { usuario, clave } });
	};

	useEffect(() => {
		if (data) {
			localStorage.setItem(
				'personal',
				JSON.stringify(data.login.personal)
			);
			localStorage.setItem('auth-token', data.login.token);
			history.push('/');
		}
	});

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
							name='usuario'
							className={`form-control ${
								errors.usuario && 'is-invalid'
							}`}
							placeholder='Nombre de usuario'
							ref={register({
								required: {
									value: true,
									message: 'Ingrese un usuario',
								},
							})}
						/>
						{errors.usuario && (
							<div className='invalid-feedback'>
								{errors.usuario.message}
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
							name='clave'
							className={`form-control ${
								errors.clave && 'is-invalid'
							}`}
							placeholder='Contraseña'
							ref={register({
								required: {
									value: true,
									message: 'Ingrese una contraseña',
								},
							})}
						/>
						{errors.clave && (
							<div className='invalid-feedback'>
								{errors.clave.message}
							</div>
						)}
					</div>
					{error && (
						<div className='alert alert-danger mt-3'>
							{error.graphQLErrors[0].message}
						</div>
					)}
				</div>
				<button className='btn' type='submit'>
					Iniciar Sesión
				</button>
			</form>
		</div>
	);
}
