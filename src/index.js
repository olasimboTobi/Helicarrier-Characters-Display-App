import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"


const client = new ApolloClient({
  uri:"http://localhost:4000/",
  cache: new InMemoryCache(),
})


// https://rickandmortyapi.com/graphql

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

