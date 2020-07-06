import React from 'react';

export default function MesaItem({ mesa, url }) {
	return (
		<div className='card mb-3'>
			<div className='card-body'>
				<div className='row'>
					<div className='col-2'>
						<img src={url} className='img-fluid' alt='mesa' />
					</div>
					<div className='col-7'>
						<h4>Mesa N°{mesa.numero}</h4>
						<span>Estado: {mesa.estado}</span>
					</div>
					<div className='col-3'>
						<div className='d-flex justify-content-around flex-wrap'>
							<button className='btn btn-primary btn-circle'>
								<i className='fa fa-pen' />
							</button>
							<button className='btn btn-warning btn-circle'>
								<i className='fa fa-ban' />
							</button>
							<button className='btn btn-danger btn-circle'>
								<i className='fa fa-trash' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
