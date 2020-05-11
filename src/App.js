import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Wrapper from './components/wrapper';
import Punk from './containers/punk';
import PunkDetail from './containers/punkDetail';
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Wrapper>
        <Route exact path='/' component={Punk} />
        <Route exact path='/detalhes/:beerId' component={PunkDetail} />
      </Wrapper>
    </Switch>
  </Router>
);

export default App;
