import React from 'react';
import { useHistory } from 'react-router';

export default function LogoutButton() {
	const history = useHistory();

	const cerrarSesion = () => {
		localStorage.removeItem('auth-token');
		localStorage.removeItem('personal');
		history.push('/login');
	};

	return (
		<button
			type='button'
			className='item-mnu-vertical mt-auto'
			onClick={cerrarSesion}>
			<i className='fas fa-sign-out-alt' />
			<span>Cerrar sesión</span>
		</button>
	);
}
