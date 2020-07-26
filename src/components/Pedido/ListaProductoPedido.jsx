import React, { useState } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ListaTiposProducto from '../Producto/ListadoTiposProducto';
import ProductoCartaItem from './ProductoCartaItem';

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

export default function ListaProductoPedido(props) {
	const { item, update, initial } = props;
	const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTO);
	const [categ, setCateg] = useState(1);

	if (loading) return 'Cargando...';
	if (error) return 'No se ha podido establecer la conexión con el servidor, intentelo nuevamente';
	return (
		<div className='col-lg-7 mb-5' >
			<div className='card  border-0'>
				<div className='card-body pt-0' style={{
					height: '30rem'
				}}>
					<select
						name='tipoProducto'
						id='cboTipoProducto'
						className='form-control   mb-2 ' 
						onChange={(e)=>
							setCateg(e.target.value)
						}
					>
						<ListaTiposProducto />
					</select>

					<div className='  buscar input-group d-flex justify-content-between flex-wrap '>
						<input
							type='search'
							className='form-control col-lg-9'
							placeholder='Buscar producto'
							aria-label='Busque un producto'
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'
						>
							<span className='' >  <i className='fa fa-plus m-1' /> Buscar</span>
						</button>
					</div>


					<div className='mt-3 '
						style={{
							height: '28rem',
							overflowY: 'scroll',
						}}
					>
						{data.listarTipoProducto.map((cat) => {
							if (cat.id == categ){
								return (
									cat.productos.map((producto) => {
										return (
											<ProductoCartaItem
												producto={producto}
												key={producto.id}
												item={item}
												update={update}
            									initial = {initial}
											/>
										);
									})
								);
							}
						})}
					</div>
				</div>

				<button className="btn btn-shift">Confirmar</button>
			</div>
		</div>

	);
}
