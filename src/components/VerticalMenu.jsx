import React, { Component } from 'react';

export default class VerticalMenu extends Component {
	render() {
		return (
			<div className='col-1 pb-1 pl-0' style={{ height: '100%' }}>
				<div className='mnu-vertical'>
					<div className='item-mnu-vertical'>
						<span className='icon-mnu-vertical'>
							<i className='fa fa-home'></i>
						</span>
						<br />
						<span className='descripction-mnu-vertical'>
							Inicio
						</span>
					</div>
					<div className='item-mnu-vertical'>
						<span className='icon-mnu-vertical'>
							<i className='fa fa-shopping-cart'></i>
						</span>
						<br />
						<span className='descripction-mnu-vertical'>Venta</span>
					</div>
					<div className='item-mnu-vertical'>
						<span className='icon-mnu-vertical'>
							<i className='fa fa-warehouse'></i>
						</span>
						<br />
						<span className='descripction-mnu-vertical'>
							Almacén
						</span>
					</div>
					<div className='item-mnu-vertical item-mnu-selected'>
						<span className='icon-mnu-vertical'>
							<i className='fa fa-utensils'></i>
						</span>
						<br />
						<span className='descripction-mnu-vertical'>
							Cocina
						</span>
					</div>
					<div className='item-mnu-vertical'>
						<span className='icon-mnu-vertical'>
							<i className='fa fa-user-cog'></i>
						</span>
						<br />
						<span className='descripction-mnu-vertical'>
							Personal
						</span>
					</div>
				</div>
			</div>
		);
	}
}
