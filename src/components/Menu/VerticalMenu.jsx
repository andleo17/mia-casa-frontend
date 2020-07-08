import React from 'react';
import VerticalMenuItem from './VerticalMenuItem';

export default function VerticalMenu() {
	return (
		<div className='mnu-vertical'>
			<VerticalMenuItem ruta='/' titulo='Inicio' icono='fa fa-home' />
			<VerticalMenuItem
				ruta='/venta'
				titulo='Venta'
				icono='fa fa-shopping-cart'
			/>
			<VerticalMenuItem
				ruta='/almacen'
				titulo='Almacén'
				icono='fa fa-warehouse'
			/>
			<VerticalMenuItem
				ruta='/cocina'
				titulo='Cocina'
				icono='fa fa-utensils'
			/>
			<VerticalMenuItem
				ruta='/personal'
				titulo='Personal'
				icono='fa fa-user-cog'
			/>
		</div>
	);
}
