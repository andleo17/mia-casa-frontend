import React from 'react';


export default function MesaItem({ mesa, url }) {
	return (
		<div className='card border-0 mb-3 listaBorde'>
			<div className='card-body '>
				<div className='row '>
					<div className='col-lg-2'>
						<img src={url} className='img-fluid rounded-circle bg-primary' alt='mesa' />
					</div>
					<div className='col-lg-5'>
						<h4>Mesa N°{mesa.numero}</h4>
						<span>Estado: {mesa.estado}</span>
					</div>
					<div className='col-lg-5'>
						<div className=' row d-flex justify-content-around flex-wrap '>
							<button
								type='button'
								className=' btn border-0 rounded-circle p-2'
								style={{ background: '#BFE6E0', width:'50px' }}>
								<i className='fa fa-pen m-0' />
							</button>
							<button className=' btn border-0  rounded-circle p-2' style={{ background: '#BFE6E0', width:'50px'  }}>
								<i className='fa fa-ban' />
							</button>
							<button className='btn border-0 rounded-circle p-2' style={{ background: '#BFE6E0', width:'50px'  }}>
								<i className='fa fa-trash' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
