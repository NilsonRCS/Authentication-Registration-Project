import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login  } />
      <Route path="/cadastro" component={ Cadastro } />
    </Switch>
  );
}

export default App;
