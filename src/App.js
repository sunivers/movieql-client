import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <ApolloProvider client={ client }>
      <Router>
        <Route exact={true} path={"/"} component={Home}></Route>
        <Route path={"/details/:movieId"} component={Detail}></Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
