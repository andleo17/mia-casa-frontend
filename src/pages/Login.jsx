import React from 'react';

export default function Login() {
	return (
		<div className='row'>
            <div className='col-lg-2 col-xl-2' style={{ backgroundColor:'#E4E4E4' }}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className='img-fluid'/>
            </div>
    
            <div className='col-lg-8 col-xl-8'>
                <div className="row justify-content-center">
                    <div className="col-8 text-center" >
                        <h1>Iniciar Sesión</h1>
                        <div className="input-group flex-nowrap mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className='fa fa-user'></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                        <div className="input-group flex-nowrap mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className='fa fa-key'></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" placeholder="Password" />
                        </div>
                        <button className='btn btn-shift'>Iniciar Sesión</button>
                    </div>
                </div>
            </div>                
        </div>
	);
}