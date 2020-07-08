import {useCallBack, useContext} from 'react'
import Context from '../context/UserContext'

export default function useUser (){
    const (jwt, setJWT) = useContext(Context)

    const login = useCallBack(({usuario, clave
    }) => {
        setJWT('test')
    }, [setJWT])

    const logout = useCallBack(() = > {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}