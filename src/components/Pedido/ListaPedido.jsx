import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

export default function ListaPedido(){
    
    // if (loading) return <h1>Cargando...</h1>;
	// if (error)
	// 	return (
	// 		<h1>
	// 			No se ha podido establecer la conexión con el servidor,
	// 			intentelo nuevamente
	// 		</h1>
    //     );

    return(
        <div className='card-body bg-light reclamof' style={{ width: '100%' }}>
        {/* <div class='card-body'> */}
            <h5 className='card-title d-flex justify-content-around flex-wrap'> Pedido </h5>
            <div className='input-group d-flex justify-content-around flex-wrap '>
                
                
            </div>

            <div
                className='mt-3'
                style={{
                    height: '30rem',
                    overflowY: 'auto',
                }}>
                
            </div>
        </div>
    )
}