import React from 'react';
import FrmLogin from '../components/Login/FrmLogin';
import logo from '../assets/logoRestaurante.png';
import { Redirect } from 'react-router';

export default function Login() {
	if (localStorage.getItem('auth-token') == null) {
		return (
			<div className='login'>
				<div className='col-lg-5 col-md-12 login-img'>
					<img src={logo} alt='logo' className='img-fluid' />
				</div>
				<FrmLogin />
			</div>
		);
	} else {
		return <Redirect to='/' />;
	}
}
