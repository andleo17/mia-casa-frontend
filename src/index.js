import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { split } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const defaultToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6bnVsbCwicm9sIjoiVVNVQVJJTyIsImNsaWVudGUiOiJ3ZWIifQ.LPzRE_q2X4oKAbgbKAr2LKyMNe2yrSJLnRb_aOgEQzg';

const httpLink = createHttpLink({
	uri: 'https://sistema-mia-casa-graphql.herokuapp.com/',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('auth-token');
	return {
		headers: {
			...headers,
			authorization: `Bearer ${token || defaultToken}`,
		},
	};
});

const wsLink = new WebSocketLink({
	uri: `ws://sistema-mia-casa-graphql.herokuapp.com/graphql`,
	options: {
		reconnect: true,
		connectionParams: {
			authorization: localStorage.getItem('auth-token'),
		},
	},
});

const link = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === 'OperationDefinition' && operation === 'subscription';
	},
	wsLink,
	authLink.concat(httpLink)
);

const client = new ApolloClient({
	link,
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
