import React from 'react';
import FrmLogin from '../components/Login/FrmLogin';
import logo from '../assets/logoRestaurante.png';

export default function Login() {
	return (
		<div className='login'>
			<div className='col-lg-5 col-md-12 login-img'>
				<img src={logo} alt='logo' className='img-fluid' />
			</div>
			<FrmLogin />
		</div>
	);
}
