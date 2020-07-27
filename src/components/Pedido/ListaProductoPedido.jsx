import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo';
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

const MUTATION_REGISTRAR_PEDIDO = gql`
	mutation RegistrarPedido($mesa: ID!, $productos: [DetallePedidoInput!]!) {
		registrarPedido(mesa: $mesa, productos: $productos) {
			id
		}
	}
`;

export default function ListaProductoPedido({ mesa }) {
	const { loading, data, error } = useQuery(QUERY_LISTAR_PRODUCTO);
	const [categoriaId, setCategoriaId] = useState(1);
	const [productos, setProductos] = useState([]);
	const [registrar] = useMutation(MUTATION_REGISTRAR_PEDIDO, {
		variables: { mesa, productos },
	});

	const agregarProducto = (producto) => {
		const iProducto = productos.findIndex(
			(p) => p.producto === producto.producto
		);
		if (iProducto !== -1) {
			const aux = [...productos];
			aux[iProducto] = producto;
			setProductos(aux);
		} else {
			setProductos([...productos, producto]);
		}
	};

	const eliminarProducto = (productoId) => {
		setProductos(productos.filter((p) => p.producto !== productoId));
	};

	if (loading) return 'Cargando...';
	if (error)
		return 'No se ha podido establecer la conexión con el servidor, intentelo nuevamente';

	return (
		<div className='col-lg-7 mb-5'>
			<div className='card border-0'>
				<div className='card-body pt-0'>
					<select
						name='tipoProducto'
						id='cboTipoProducto'
						className='form-control mb-2 '
						onChange={(e) =>
							setCategoriaId(parseInt(e.target.value))
						}>
						<ListaTiposProducto />
					</select>

					<div className='buscar input-group d-flex justify-content-between flex-wrap '>
						<input
							type='search'
							className='form-control col-lg-9'
							placeholder='Buscar producto'
							aria-label='Busque un producto'
						/>
						<button
							className='btnColor d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
							type='button'>
							<span>
								<i className='fa fa-plus m-1' />
								Buscar
							</span>
						</button>
					</div>

					<div className='mt-3' style={{ overflowY: 'scroll' }}>
						{data.listarTipoProducto
							.find((c) => parseInt(c.id) === categoriaId)
							.productos.map((producto) => {
								return (
									<ProductoCartaItem
										producto={producto}
										agregar={agregarProducto}
										eliminar={eliminarProducto}
										key={producto.id}
									/>
								);
							})}
					</div>
				</div>

				<button className='btn btn-shift' onClick={registrar}>
					Confirmar
				</button>
			</div>
		</div>
	);
}
