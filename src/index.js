import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'https://sistema-mia-casa-graphql.herokuapp.com/',
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ApolloProvider client={client}>
				<App />
			</ApolloProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
