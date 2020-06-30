import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class VerticalMenuItem extends Component {
	render() {
		return (
			<NavLink
				className={`item-mnu-vertical ${
					this.props.seleccionado && 'item-mnu-selected'
				}`}
				to={`${this.props.ruta}`}
				onClick={this.props.click}>
				<i className={this.props.icono}></i>
				<span>{this.props.titulo}</span>
			</NavLink>
		);
	}
}
