import React, { Fragment } from 'react';
import VerticalMenu from '../components/Menu/VerticalMenu';
import { Switch, Route } from 'react-router-dom';

import Reclamo from './Reclamo';
import Mesa from './Mesa';
import Producto from './Producto';
import Pago from './Pago';
import Venta from './Venta';
import Main from './Main';
import Login from './Login';
import Navbar from '../components/Menu/Navbar';

function App() {
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
