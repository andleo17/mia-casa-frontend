import React from 'react';
import VerticalMenu from '../components/Menu/VerticalMenu';
import { Switch, Route } from 'react-router-dom';
import Reclamo from './Reclamo';
import Venta from './Venta/Venta';

function App() {
	return (
		<div className='container-fluid'>
			<div className='row'>
				<VerticalMenu />
				<Switch>
					<Route
						exact
						path='/'
						component={() => <h1>Bienvenido</h1>}
					/>
					<Route exact path='/venta' component={Venta} />
					<Route exact path='/reclamo' component={Reclamo} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
