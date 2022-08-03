import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WelcomePage from './pages/Welcome';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleStory from './pages/SingleStory';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Donate from './pages/Donate';
// import Nav from './components/Nav';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// App Component - Root of Client App

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<WelcomePage />}
              />
              <Route 
                path="/Home"
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/stories/:storyId" 
                element={<SingleStory />}
              />
              <Route 
                path="/donate" 
                element={<Donate />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
