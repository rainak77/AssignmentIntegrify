import React from "react";
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Details } from "./pages/details/details.component";
import Homepage from "./pages/homepage/homepage.component";

const App = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/details/:id' component={Details} />
        <Details />
      </Switch>
    </div>
  );
};

export default App;
