import React from 'react';
import VerticalMenu from '../components/Menu/VerticalMenu';
import { Switch, Route } from 'react-router-dom';
import Reclamo from './Reclamo';
import Mesa from './Mesa';
import Producto from './Producto';
import Pago from './Pago';
import Venta from './Venta';
import Main from './Main';
import Login from './Login';

function App() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<VerticalMenu />
				<Switch>
					<Route exact path='/' component={Main} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/venta' component={Venta} />
					<Route exact path='/reclamo' component={Reclamo} />
					<Route exact path='/mesa' component={Mesa} />
					<Route exact path='/producto' component={Producto} />
					<Route exact path='/pago' component={Pago} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
