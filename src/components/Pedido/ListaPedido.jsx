import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

export default function ListaPedido() {

    // if (loading) return <h1>Cargando...</h1>;
    // if (error)
    // 	return (
    // 		<h1>
    // 			No se ha podido establecer la conexión con el servidor,
    // 			intentelo nuevamente
    // 		</h1>
    //     );

    return (
        <div className=' nose col-lg-12'  >
            <div className='card-body bg-light reclamof col-lg-12' >

            {/* <div class='card-body'> */}
            <h5 className='card-title d-flex justify-content-around flex-wrap font-weight-bold'> Pedido </h5>
            {/* <div className='input-group d-flex justify-content-around flex-wrap '>
            </div>
            <div
                className='mt-3'
                style={{
                    height: '30rem',
                    overflowY: 'auto',
                }}>
            </div> */}
            <div  style={{
                    height: '90%',
                    overflowY: 'scroll',
                }} >

                <div className='card mb-3 listaBorde ' >
                    <div className='card-body'>
                        <div className='d-flex justify-content-around flex-wrap'>
                            <div className='col-lg-2'>
                                <img
                                    className='img-fluid'
                                // alt='producto'
                                />
                            </div>
                            <div className='col-lg-6'>
                                <h5 className='colorLetra'> Inka Kola 1.5L</h5>
                                <h6 className='colorLetra2'> S/8</h6>
                            </div>
                            <div className='col-lg-2  d-flex justify-content-end flex-wrap'>
                                <div className='row'>
                                    <button className='btn border-0 rounded-circle p-2 circuloverde m-0' style={{ background: '#EE814A' }}>
                                        <samp>1</samp>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
            <div>
                <label htmlFor="" className='row d-flex justify-content-end flex-wrap mr-3 mt-2'>Total: S/ 300</label>
            </div>
            <div className='row d-flex justify-content-end flex-wrap mt-3 mb-3'>
                <button
                    className='btn-dark  mr-3 d-flex align-items-center border-0 justify-content-center
							text-decoration-none'
                    
                >
                    <span className='' >   Cancelar</span>
                </button>
                <button
                    className='btnColor d-flex align-items-center border-0 mr-2 justify-content-center
							text-decoration-none'
                    
                >
                    <span className='' > Confirmar</span>
                </button>
            </div>
        </div>
    )
}