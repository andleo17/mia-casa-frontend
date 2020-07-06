import React, { Component } from 'react';
import MesaItem from '../../components/Mesa/MesaItem';

export default class Mesa extends Component {
	state = {};

	render() {
		return (
			<div>
				<h1>Seleccione una mesa</h1>
				{Array(7).map((e) => (
					<MesaItem />
				))}
			</div>
		);
	}
}
