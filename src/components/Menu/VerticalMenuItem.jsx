import React, { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

export default function VerticalMenuItem({ ruta, titulo, icono }) {
	const [seleccionado, setSeleccionado] = useState(false);
	const match = useRouteMatch({ path: ruta, exact: true });

	useEffect(() => {
		if (match) {
			setSeleccionado(true);
		} else {
			setSeleccionado(false);
		}
	}, [match]);

	return (
		<NavLink
			className={`item-mnu-vertical ${
				seleccionado && 'item-mnu-selected'
			}`}
			to={`${ruta}`}>
			<i className={icono}></i>
			<span>{titulo}</span>
		</NavLink>
	);
}
