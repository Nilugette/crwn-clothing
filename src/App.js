import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>Hats Page</div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
