import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

export const QUERY_LISTAR_TIPOS_PRODUCTO = gql`
	query ListarProducto {
		listarTipoProducto{
            id
            nombre
            estado
        }
	}
`;



export default function ListaTiposProducto() {
	const { loading, error, data } = useQuery(QUERY_LISTAR_TIPOS_PRODUCTO);
	if (loading) return <option>Cargando...</option>;
	if (error)
		return (
			<select>
				<option>ERROR</option>
			</select>
		);

	return (
        <Fragment>
            {data.listarTipoProducto.map((tipoProducto) => {
                //if(tipoProducto.estado) 
                return (<option value={tipoProducto.id} key={tipoProducto.id}>{tipoProducto.nombre}</option>);
            })}
        </Fragment>
	);
}