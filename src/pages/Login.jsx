import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import useUser from '../hooks/useUser'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const Location = useHistory()
    const {login, isLogged} = useUser()

    useEffect( () => {
        if(isLogged) Location.push('/')
    }, [isLogged])

    const handleSubmit = (e) => {
        e.preventDefault();
        login(usuario, clave)
        //alert(`${username}, ${password}`)
        //Location.push('/')
    }
	return (
		<div className='row'>
            <div className='col-lg-6 col-xl-6' style={{ backgroundColor:'#E4E4E4' }}>
                <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" className='img-fluid'/>
            </div>
    
            <div className='col-lg-6 col-xl-6'>
                <div className="row justify-content-end">
                    <div className="col-8 text-center" >
                        <h1>Iniciar Sesión</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group flex-nowrap mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className='fa fa-user'></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" onChange={ e => setUsername(e.target.value) } value={username} />
                            </div>
                            <div className="input-group flex-nowrap mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className='fa fa-key'></i>
                                    </span>
                                </div>
                                <input type="password" className="form-control" placeholder="Password" onChange={ e => setPassword(e.target.value) } value={password} />
                            </div>
                            <button className='btn btn-shift'>Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
            </div>                
        </div>
	);
}