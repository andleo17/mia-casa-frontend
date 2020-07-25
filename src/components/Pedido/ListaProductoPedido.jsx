import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ProductoPedidoItem from './ProductoPedidoItem';



export const QUERY_LISTAR_PRODUCTO = gql`
	query ListarProducto {
		listarTipoProducto {
			id
			nombre
			productos {
				id
				nombre
				descripcion
				cantidad
				precio
				imagen
				estado
				tipoProducto {
					id
					nombre
				}
			}
		}
	}
`;

export default function ListaProductoPedido({ mesa, props }) {
	const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTO);
	const [categ, setCateg] = useState(1);

	if (loading) return 'Cargando...';
	if (error) return 'Error';
	return (
		<div className="row">
			<div className='col-lg-6'>
				<div className='card h-100 border-0'>
					<div className='card-body'>
						<h5 className='card-title'>Listado de Productos</h5>
						<div className="input-group mb-3">
							<select
								name="cboCategoria"
								id="cboCategoria"
								className="form-control"
								onChange={(e) =>
									setCateg(e.target.value)
								}
							>
								{data.listarTipoProducto.map((cat) => {
									return (
										<option value={cat.id}>{cat.nombre}</option>
									);
								})}
							</select>
						</div>
						<div className=' input-group '>
							<input
								type='search'
								className='form-control '
								placeholder='Buscar...'
								aria-label='Busque un producto'
							/>
						</div>
						<div className='mt-3'>
							{data.listarTipoProducto.map((cat) => {
								if (cat.id == categ){
									return(
										cat.productos.map((producto) => {
											return (
												<ProductoPedidoItem
													url={producto.imagen}
													producto={producto}
													key={producto.id}
												/>
											);
										})
									);
								}
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="col-lg-6">

				<div className='card h-100 border-0'>
					<div className='card-body'>
						<h5 className='card-title'>Productos seleccionados</h5>
						<div className='mt-3'>
							hola
						</div>
					</div>
				</div>

				<button className="btn btn-shift">Confirmar</button>
			</div>
		</div>
	);
}
