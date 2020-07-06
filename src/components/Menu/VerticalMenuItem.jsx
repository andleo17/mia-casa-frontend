import React from 'react';
import { NavLink } from 'react-router-dom';

export default function VerticalMenuItem({
	ruta,
	titulo,
	icono,
	seleccionado,
	click,
}) {
	return (
		<NavLink
			className={`item-mnu-vertical ${
				seleccionado && 'item-mnu-selected'
			}`}
			to={`${ruta}`}
			onClick={click}>
			<i className={icono}></i>
			<span>{titulo}</span>
		</NavLink>
	);
}
