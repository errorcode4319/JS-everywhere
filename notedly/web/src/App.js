import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from '/components/GlobalStyle';

import Pages from '/pages';

import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from 'apollo-link-context';

const uri = process.env.API_URI;
const httpLink = createHttpLink({uri});
const cache = new InMemoryCache();

const authLink = setContext((_, {headers}) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true 
});


const data = {
    isLoggedIn: !!localStorage.getItem('token')
};

const App = () => {
    cache.writeData({data})

    return (
        <ApolloProvider client={client}>
            <GlobalStyle/>
            <Pages />
        </ApolloProvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));