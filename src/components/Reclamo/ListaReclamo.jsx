import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import ItemReclamo from './ItemReclamo';

const QUERY_LISTAR_RECLAMO = gql`
    query ListarReclamos {
        listarReclamo {
            id
            motivo
            detallePedido{
                pedido {
                    id
                    mesa {
                        id
                        numero          
                    }        
                    productos {
                        precio  
                        producto{
                            id
                            nombre                                                      
                        }
                    }
                }      
            }
        }
    }
`;

export default function ListaReclamo(){
    const {loading , error, data} = useQuery(QUERY_LISTAR_RECLAMO);

    if (loading) return <h1>Cargando... </h1>;
    if (error) return <h1>Error al mostrar datos....</h1>;

    return (
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
					class='pl-4'
					style={{
						height: '30rem',
						overflowY: 'auto',
					}}>
                    {data.listarReclamo.map(
                        (reclamo) => {
                            return (
                                <ItemReclamo
                                    url=''
                                    numero={reclamo.numero}
                                    id={reclamo.id}
                                />
                            );
                        }
                    )}							
				</div>
			</div>
		</div>
    )
}