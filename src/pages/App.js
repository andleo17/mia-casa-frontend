import React, { Fragment } from 'react';
import VerticalMenu from '../components/VerticalMenu';
import { Switch, Route } from 'react-router-dom';
import Reclamo from './Reclamo';

function App() {
	return (
		<div className='container-fluid'>
			<div className='row' style={{ height: '100%' }}>
				<VerticalMenu />
				<Switch>
					<Route
						exact
						path='/'
						component={() => <h1>Bienvenido</h1>}
					/>
					<Route exact path='/reclamo' component={Reclamo} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
