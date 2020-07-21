import React from 'react';
import plato from '../../assets/pedido.png';

export default function ItemPedido({pedido, showData, initial, props}){
	console.log(pedido);
	return(
		<div className='card mb-3  listaBorde'>
				<div className='card-body' onClick={
									showData
								}>
					<div className='row'>
						<div className='col-2 row align-items-center '>
							<img
								src={plato}
								className='img-fluid ml-4'
								alt='pedido'
							/>
						</div>
						<div className='col-10 ml-4'>
							<h4>Pedido N°{pedido.id}</h4>
							<span>Mesa: {pedido.mesa.numero}</span>
							<br />
						</div>
						{/* <div className='col-4 col-btn align-self-end'>
							<button className='btn btn-danger btn-accion btn-circle'>
								<i className='fa fa-credit-card'></i>
							</button>
						</div> */}
					</div>
				</div>
		</div>
	);


};

