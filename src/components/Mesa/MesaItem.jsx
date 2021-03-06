import React from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { QUERY_LISTAR_MESA } from './ListaMesa';

const ELIMINAR_MESA = gql`
	mutation EliminarMesa($id: ID!) {
		eliminarMesa(id: $id) {
			id
		}
	}
`;

const MODIFICAR_MESA = gql`
	mutation ModificarMesa($id: ID!, $numero: Int, $estado: Boolean) {
		modificarMesa(id: $id, numero: $numero, estado: $estado) {
			numero
			estado
		}
	}
`;

export default function MesaItem({ mesa, url, showData, props }) {
	const [eliminarMesa] = useMutation(ELIMINAR_MESA);
	const [darBajaMesa] = useMutation(MODIFICAR_MESA);

	return (
		<div className='card border-0 mb-3 listaBorde'>
			<div className='card-body '>
				<div className='row '>
					<div className='col-lg-2 p-0'>
						<img
							src={url}
							className='img-fluid rounded-circle '
							alt='mesa'
						/>
					</div>
					<div className='col-lg-5'>
						<h4 className='colorLetra'>Mesa N°{mesa.numero}</h4>
						<span>
							Estado: {mesa.estado ? 'Vigente' : 'No Vigente'}
						</span>
					</div>
					<div className='col-lg-5'>
						<div className=' row d-flex justify-content-around flex-wrap '>
							<button
								type='button'
								className='btn border-0 circuloverde rounded-circle p-2'
								style={{ background: '#BFE6E0'}}
								onClick={() => {
									showData();
								}}
							>
								<i className='fa fa-pen m-0' />
							</button>
							<button
								className='btn border-0 circuloverde rounded-circle p-2'
								style={{ background: '#BFE6E0'}}
								onClick={() =>
									darBajaMesa({
										variables: {
											id: parseInt(mesa.id),
											estado: false,
											numero: parseInt(mesa.numero),
										},
										refetchQueries: [
											{
												query: QUERY_LISTAR_MESA,
											},
										],
									})
								}>
								<i className='fa fa-ban' />
							</button>
							<button
								className='btn border-0 circuloverde rounded-circle p-2'
								style={{ background: '#BFE6E0'}}
								onClick={() =>
									eliminarMesa({
										variables: { id: parseInt(mesa.id) },
										refetchQueries: [
											{
												query: QUERY_LISTAR_MESA,
											},
										],
									})
								}>
								<i className='fa fa-trash' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
