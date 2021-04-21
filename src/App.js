import React from 'react';
import { Toggle } from './components'
import { Home, Info } from './pages'
import { Switch, Route } from 'react-router-dom'
import './style.css'

function App(){

    return (
      <>
        <Toggle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
        </Switch>
      </>
    );
}

export default App;