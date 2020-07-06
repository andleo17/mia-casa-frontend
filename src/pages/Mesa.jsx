import React, { Component, Fragment } from 'react';
import ItemListado from '../components/Mesa/itemListado';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const ListadoMesas = (props) => {
    return (
        <Query query={ gql `{
            listarMesa{
                id
                numero
                estado
            }
        }`}>
            {props.children}
        </Query>
    );
}

export default class Mesa extends Component {
	render() {
		return (
			<Fragment>
				<div className="col-11 row mt-3 mb-3">
                    <div className="col-lg-6 col-xl-6">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                            <h5 className="card-title">Listado de Mesas</h5>
                            <div className="input-group mb-3 pl-4">
                                <input type="search" className="form-control" placeholder="Buscar..." aria-label="Busque una mesa" />
                                <div className="input-group-append">
                                <button className="btn btn-shift" type="button"><i className="fa fa-plus"></i> Agregar</button>
                                </div>
                            </div>

                            <div className="pl-4" style={{ height: '30rem', overflowY: 'auto' }}>
                                <ListadoMesas>
                                    {({loading, error, data}) => {
                                        if(loading) return <p>Cargando...</p>
                                        if(error) return <p>No se ha podido establecer la conexión con el servidor, intentelo nuevamente</p>
                                        
                                        return data.listarMesa.map(mesa => {
                                            return <ItemListado
                                                url='https://static.vecteezy.com/system/resources/previews/000/265/671/non_2x/cartoon-wood-table-vector.jpg'
                                                numero={ mesa.numero }
                                                estado={ mesa.estado }
                                                id={ mesa.id }
                                            />
                                        })
                                    }}
                                </ListadoMesas>
                            </div>
                            </div>
                        </div>
                    </div>
            
                    <div className="col-lg-6 col-xl-6">
                        <div className="card" style={{ width: '100%' }}>
                            <div className="card-body">
                                <h5 className="card-title">Datos de la mesa</h5>
                                <div className="card bg-light mb-3 ml-4" style={{ width: '95%' }}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="txtNumero">Número:</label>
                                            <input type="text" name="txtNumero" id="txtNumero" placeholder="Ingrese el número de mesa..." className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Estado:</label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="chkEstado" id="chkEstado" />
                                                <label className="form-check-label" htmlFor="chkEstado">
                                                    Vigente
                                                </label>
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
