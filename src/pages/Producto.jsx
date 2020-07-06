import React, { Component, Fragment } from 'react';
import ItemListado from '../components/Producto/ItemListado.jsx';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const ListadoProductos = (props) => {
    return (
        <Query query={ gql `{
            listarProducto{
                id
                nombre
                descripcion
                cantidad
                precio
                imagen
                estado
                tipoProducto{
                id
                nombre
                }
                receta{
                insumo{
                    id
                    nombre
                }
                cantidad
                unidad
                }
            }
        }`}>
            {props.children}
        </Query>
    );
}

const ListadoTiposProcuto = (props) => {
    return (
        <Query query={ gql `{
            listarTipoProducto{
                id
                nombre
            }
          }`}>
            {props.children}
        </Query>
    );
}

export default class Producto extends Component {
	render() {
		return (
			<Fragment>
				<div className="col-11 row mt-3 mb-3">
                    <div className="col-lg-6 col-xl-6">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Datos del producto</h5>
                                <div className="card bg-light mb-3 ml-4" style={{ width: '95%' }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-7">
                                                <div className="form-group">
                                                    <label for="txtNumero">Tipo de producto:</label>
                                                    <select className="form-control">
                                                        <ListadoTiposProcuto>
                                                            {({loading, error, data}) => {
                                                                if(loading) return <p>Cargando...</p>
                                                                if(error) return <p>No se ha podido establecer la conexión con el servidor, intentelo nuevamente</p>
                                                                
                                                                return data.listarTipoProducto.map(tipoProducto => {
                                                                    return <option value={ tipoProducto.id }>{ tipoProducto.nombre }</option>
                                                                })
                                                            }}
                                                        </ListadoTiposProcuto>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="txtNombre">Nombre:</label>
                                                    <input type="text" id="txtNombre" name="txtNombre" className="form-control" placeholder="Ingrese el nombre del producto.." />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="txtPrecio">Precio:</label>
                                                    <input type="number" id="txtPrecio" name="txtPrecio" className="form-control" placeholder="Ingrese el precio del producto..." />
                                                </div>
                                                <div className="form-group">
                                                    <label>Estado:</label>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" name="chkEstado" id="chkEstado" />
                                                        <label className="form-check-label" for="chkEstado">
                                                            Vigente
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group col-btn">
                                                    <button className="btn btn-shift" type="button">Registrar</button>
                                                </div>
                                            </div>

                                            <div className="col-5">
                                                <img src="https://img2.freepng.es/20190608/bwj/kisspng-side-dish-portable-network-graphics-meal-food-meal-png-transparent-images-png-all-5cfbf9ae8ac524.8458123615600173265684.jpg" className="img-fluid img-circle" alt="IMG" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-6">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Listado de Productos</h5>
                                <div className="input-group mb-3 pl-4">
                                    <input type="search" className="form-control" placeholder="Buscar..." aria-label="Busque una mesa..." />
                                    <div className="input-group-append">
                                    <button className="btn btn-shift" type="button"><i className="fa fa-plus"></i> Agregar</button>
                                    </div>
                                </div>
                
                                <div id="listado mesas" className="pl-4">
                                    <ListadoProductos>
                                        {({loading, error, data}) => {
                                            if(loading) return <p>Cargando...</p>
                                            if(error) return <p>No se ha podido establecer la conexión con el servidor, intentelo nuevamente</p>
                                            
                                            return data.listarProducto.map(producto => {
                                                return <ItemListado
                                                    url='https://img2.freepng.es/20190608/bwj/kisspng-side-dish-portable-network-graphics-meal-food-meal-png-transparent-images-png-all-5cfbf9ae8ac524.8458123615600173265684.jpg'
                                                    nombre={ producto.nombre }
                                                    tipo={ producto.tipoProducto.nombre }
                                                    estado={ producto.estado }
                                                    precio={ producto.precio }
                                                    id={ producto.id }
                                                />
                                            })
                                        }}
                                    </ListadoProductos>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</Fragment>
		);
	}
}
