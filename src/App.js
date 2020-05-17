import React from 'react';
import Home from './View/TemplateHome.jsx/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import View_2 from './View/View_2.jsx';
import View_3 from './View/View_3.jsx';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/View_2" component={View_2} />
        <Route exact path="/View_3" component={View_3} />
      </Switch>
    </Router>
  );
}
export default App;
