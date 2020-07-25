import React from 'react';
import plato from '../../assets/pedido.png';

export default function ItemPedido({pedido, showData, initial, props}){
	return(
		<div className='card mb-3  listaBorde'>
				<div className='card-body' onClick={showData}>
					<div className='row'>
						<div className='col-2 row align-items-center '>
							<img
								src={plato}
								className='img-fluid ml-4'
								alt='pedido'
							/>
						</div>
						<div className='col-10 ml-4'>
							<label className='colorLetra font-weight-bold'>Pedido N°{pedido.id}</label> <br/>
							<label className='colorLetra2'>Mesa: {pedido.mesa.numero}</label>		
						</div>
					</div>
				</div>
		</div>
	);
};

