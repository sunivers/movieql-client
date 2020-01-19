import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

const RouterWrapper = styled.div`
  text-align: center;
`

function App() {
  return (
    <ApolloProvider client={ client }>
      <RouterWrapper>
        <Router>
          <Route exact={true} path={"/"} component={Home}></Route>
          <Route path={"/details/:movieId"} component={Detail}></Route>
        </Router>
      </RouterWrapper>
    </ApolloProvider>
  );
}

export default App;
