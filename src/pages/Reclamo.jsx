import React, { Component, Fragment } from 'react';

export default class Reclamo extends Component {
	render() {
		return (
			<Fragment>
				<div class='col-lg-4'>
					<div class='card mb-3' style={{ width: '100%' }}>
						<div class='card-body'>
							<h5 class='card-title'>Datos del reclamo</h5>
							<div
								class='card bg-light mb-3 ml-4'
								style={{ width: '95%' }}>
								<div class='card-body'>
									<div class='row'>
										<div class='col-lg-6 col-xl-6'>
											<div class='form-group'>
												<label for='txtPedido'>
													Pedido:
												</label>
												<input
													type='text'
													name='txtPedido'
													id='txtPedido'
													placeholder='Ingrese el pedido...'
													class='form-control'
												/>
											</div>
											<div class='form-group'>
												<label for='txtProducto'>
													Producto:
												</label>
												<input
													type='text'
													name='txtProducto'
													id='txtProducto'
													placeholder='Ingrese el producto...'
													class='form-control'
												/>
											</div>
										</div>
										<div class='col-lg-6 col-xl-6'>
											<div class='form-group'>
												<label for='txtMotivo'>
													Motivo:
												</label>
												<textarea
													name='txtMotivo'
													id='txtMotivo'
													placeholder='Ingrese el pedido...'
													class='form-control'></textarea>
											</div>
										</div>
									</div>
									<div class='row justify-content-end'>
										<button class='btn btn-shift mr-3'>
											Registrar
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='card mb-3' style={{ width: '100%' }}>
						<div class='card-body'>
							<h5 class='card-title'>Listado de Pedidos</h5>
							<div class='input-group mb-3 pl-4'>
								<input
									type='search'
									class='form-control'
									placeholder='Buscar...'
									aria-label='Busque un pedido'
								/>
							</div>
							<div
								id='listado mesas'
								class='pl-4'
								style={{
									height: '7.4rem%',
									overflowY: 'auto',
								}}>
								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://st.depositphotos.com/1036708/2191/i/450/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Mesa N° 03</h4>
												<span>s/ 100.50</span>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-archive'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://st.depositphotos.com/1036708/2191/i/450/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Mesa N° 03</h4>
												<span>s/ 100.50</span>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-archive'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://st.depositphotos.com/1036708/2191/i/450/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Mesa N° 03</h4>
												<span>s/ 100.50</span>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-archive'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://st.depositphotos.com/1036708/2191/i/450/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Mesa N° 03</h4>
												<span>s/ 100.50</span>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-archive'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://st.depositphotos.com/1036708/2191/i/450/depositphotos_21918797-stock-photo-knife-and-fork-with-plate.jpg'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Mesa N° 03</h4>
												<span>s/ 100.50</span>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-archive'></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='col-lg-6 col-xl-6'>
					<div class='card' style={{ width: '100%' }}>
						<div class='card-body'>
							<h5 class='card-title'>Listado de Reclamos</h5>
							<div class='input-group mb-3 pl-4'>
								<input
									type='search'
									class='form-control'
									placeholder='Buscar...'
									aria-label='Busque un reclamo'
								/>
								<div class='input-group-append'>
									<button class='btn btn-shift' type='button'>
										<i class='fa fa-plus'></i> Agregar
									</button>
								</div>
							</div>

							<div
								id='listado mesas'
								class='pl-4'
								style={{
									height: '30rem',
									overflowY: 'auto',
								}}>
								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://www.colegioays.com/wp-content/uploads/2016/06/documentos.png'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Reclamo 16</h4>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-pen'></i>
												</button>
												<button class='btn btn-danger btn-accion btn-circle'>
													<i class='fa fa-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://www.colegioays.com/wp-content/uploads/2016/06/documentos.png'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Reclamo 16</h4>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-pen'></i>
												</button>
												<button class='btn btn-danger btn-accion btn-circle'>
													<i class='fa fa-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://www.colegioays.com/wp-content/uploads/2016/06/documentos.png'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Reclamo 16</h4>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-pen'></i>
												</button>
												<button class='btn btn-danger btn-accion btn-circle'>
													<i class='fa fa-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://www.colegioays.com/wp-content/uploads/2016/06/documentos.png'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Reclamo 16</h4>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-pen'></i>
												</button>
												<button class='btn btn-danger btn-accion btn-circle'>
													<i class='fa fa-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>

								<div class='card mb-3'>
									<div class='card-body'>
										<div class='row'>
											<div class='col-2 row align-items-center'>
												<img
													src='https://www.colegioays.com/wp-content/uploads/2016/06/documentos.png'
													class='img-fluid'
													alt='Responsive'
												/>
											</div>
											<div class='col-6'>
												<h4>Reclamo 16</h4>
											</div>
											<div class='col-4 col-btn align-self-end'>
												<button class='btn btn-primary btn-accion btn-circle'>
													<i class='fa fa-pen'></i>
												</button>
												<button class='btn btn-danger btn-accion btn-circle'>
													<i class='fa fa-trash'></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
