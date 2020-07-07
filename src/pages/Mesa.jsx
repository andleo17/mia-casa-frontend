import React from 'react';
import ListaMesa from '../components/Mesa/ListaMesa';
import FrmMesa from '../components/Mesa/FrmMesa';

export default function Mesa() {
	return (
		<div className='row'>
			<ListaMesa />
			<FrmMesa />
		</div>
	);
}
