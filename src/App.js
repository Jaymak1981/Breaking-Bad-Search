import React from 'react';
// import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Nav from './Nav';
import Home from './Home';
import Detail from './Detail';

// create a function to hold app components
function App() {
  return (
    // create route to navigate between home and details
    <Router>
      <div className='App'>
        <Nav />
        <div>
          <Switch>
            <Route path='/Home' exact component={Home}/>
            <Route path='/Home' exact component={Home}/>
            <Route path='/Home/:id' component={Detail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;