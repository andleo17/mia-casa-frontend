import React, { useState } from 'react';
import VerticalMenuItem from './VerticalMenuItem';

export default function VerticalMenu() {
	const [items, setItems] = useState([true, false, false, false, false]);

	const clickHandle = (indice) => {
		const estadoInicial = Array(5).fill(false);
		estadoInicial[indice] = true;
		setItems(estadoInicial);
	};

	return (
		<div className='col-1 p-0'>
			<div className='mnu-vertical'>
				<VerticalMenuItem
					ruta='/'
					titulo='Inicio'
					icono='fa fa-home'
					seleccionado={items[0]}
					click={() => clickHandle(0)}
				/>
				<VerticalMenuItem
					ruta='/venta'
					titulo='Venta'
					icono='fa fa-shopping-cart'
					seleccionado={items[1]}
					click={() => clickHandle(1)}
				/>
				<VerticalMenuItem
					ruta='/almacen'
					titulo='Almacén'
					icono='fa fa-warehouse'
					seleccionado={items[2]}
					click={() => clickHandle(2)}
				/>
				<VerticalMenuItem
					ruta='/cocina'
					titulo='Cocina'
					icono='fa fa-utensils'
					seleccionado={items[3]}
					click={() => clickHandle(3)}
				/>
				<VerticalMenuItem
					ruta='/personal'
					titulo='Personal'
					icono='fa fa-user-cog'
					seleccionado={items[4]}
					click={() => clickHandle(4)}
				/>
			</div>
		</div>
	);
}
