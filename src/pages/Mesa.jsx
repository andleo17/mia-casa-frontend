import React from 'react';
import ListaMesa from '../components/Mesa/ListaMesa';
import FrmMesa from '../components/Mesa/FrmMesa';
export default function Mesa() {
	return (
		<div className='col'>
			<div className='row p-3'>
				<div className='col-lg-6'>
					<ListaMesa />
				</div>
				<div className='col-lg-6'>
					<FrmMesa />
				</div>
			</div>
		</div>
	);
}
