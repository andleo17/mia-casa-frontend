import React, { Fragment, useEffect } from 'react';
import VerticalMenu from '../components/Menu/VerticalMenu';
import { Switch, Route, useHistory } from 'react-router-dom';

import Reclamo from './Reclamo';
import Mesa from './Mesa';
import Producto from './Producto';
import Pago from './Pago';
import Venta from './Venta';
import Main from './Main';
import Login from './Login';
import Navbar from '../components/Menu/Navbar';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo';

const QUERY_USUARIO_ACTUAL = gql`
	query UsuarioActual {
		usuarioActual {
			id
			nombres
			apellidos
		}
	}
`;

function App() {
	const { loading, error, data } = useQuery(QUERY_USUARIO_ACTUAL);
	const history = useHistory();

	useEffect(() => {
		if (data) {
			if (!data.usuarioActual) {
				history.push('/login');
			}
		}
	}, [data, history]);

	if (loading) return <h1>Cargando</h1>;
	if (error) return <h1>{error.message}</h1>;

	return (
		<Switch>
			<Route exact path='/login' component={Login} />
			<Fragment>
				<Navbar />
				<div className='d-flex'>
					<VerticalMenu />
					<div className='contenido'>
						<div className='container-fluid'>
							<Route exact path='/' component={Main} />
							<Route exact path='/venta' component={Venta} />
							<Route
								exact
								path='/venta/mesa/:id'
								component={(props) => (
									<h1>
										Aquí iría la info de la mesa{' '}
										{props.match.params.id}
									</h1>
								)}
							/>
							<Route exact path='/reclamo' component={Reclamo} />
							<Route exact path='/mesa' component={Mesa} />
							<Route
								exact
								path='/producto'
								component={Producto}
							/>
							<Route exact path='/pago' component={Pago} />
						</div>
					</div>
				</div>
			</Fragment>
		</Switch>
	);
}

export default App;
