import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import HomeView from './views/'; //finish routing, nothing in views yet
import Register from './views/Registration.js';
import LoginGo from './components/go/LoginGo.js';
import LoginGet from './components/get/LoginGet.js';
import LoginGive from './components/give/LoginGive.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <HomeView />
          </div>
          <div>
            <Route path='/register' component={Register} />
            <Route path='/login/give' component={LoginGive}/>
            <Route path='/login/go' component={LoginGo}/>
            <Route path='/login/get' component={LoginGet}/>
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
