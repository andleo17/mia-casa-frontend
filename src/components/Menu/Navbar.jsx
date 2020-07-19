import React from 'react';
import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const personal = JSON.parse(localStorage.getItem('personal'));

	return (
		<nav className='navbar navbar-light bg-light'>
			<NavLink to='/' className='navbar-brand'>
				<img src={logo} alt='logo' width='50' />
				<span className='ml-2 font-weight-bold'>Sistema Mía Casa</span>
			</NavLink>
			<div className='navbar-menu'>
				<hr className='vertical' />
				<i className='far fa-bell' />
				<hr className='vertical' />
				<span>{`${personal?.nombres} ${personal?.apellidos}`}</span>
			</div>
		</nav>
	);
}
