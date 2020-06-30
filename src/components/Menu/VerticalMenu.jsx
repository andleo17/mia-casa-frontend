import React, { Component } from 'react';
import VerticalMenuItem from './VerticalMenuItem';

export default class VerticalMenu extends Component {
	state = {
		items: Array(5).fill(false),
	};

	clickHandle(indice) {
		const estadoInicial = Array(5).fill(false);
		estadoInicial[indice] = true;
		this.setState({ items: estadoInicial });
	}

	render() {
		return (
			<div className='col-1 p-0'>
				<div className='mnu-vertical'>
					<VerticalMenuItem
						ruta='/'
						titulo='Inicio'
						icono='fa fa-home'
						seleccionado={this.state.items[0]}
						click={() => this.clickHandle(0)}
					/>
					<VerticalMenuItem
						ruta='/venta'
						titulo='Venta'
						icono='fa fa-shopping-cart'
						seleccionado={this.state.items[1]}
						click={() => this.clickHandle(1)}
					/>
					<VerticalMenuItem
						ruta='/almacen'
						titulo='Almacén'
						icono='fa fa-warehouse'
						seleccionado={this.state.items[2]}
						click={() => this.clickHandle(2)}
					/>
					<VerticalMenuItem
						ruta='/cocina'
						titulo='Cocina'
						icono='fa fa-utensils'
						seleccionado={this.state.items[3]}
						click={() => this.clickHandle(3)}
					/>
					<VerticalMenuItem
						ruta='/personal'
						titulo='Personal'
						icono='fa fa-user-cog'
						seleccionado={this.state.items[4]}
						click={() => this.clickHandle(4)}
					/>
				</div>
			</div>
		);
	}
}
