import React from 'react';
import Home from './View/TemplateHome.jsx/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import View_2 from './View/View_2.jsx';
import View_3 from './View/View_3.jsx';
import View_4 from './View/View_4.jsx';
import View_5 from './View/View_5.jsx';
import View_6 from './View/View_6.jsx';
import { load } from './Components/Text-Speech';

function App() {
  React.useEffect(() => {
    load();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/View_2' component={View_2} />
        <Route exact path='/View_3' component={View_3} />
        <Route exact path='/View_4' component={View_4} />
        <Route exact path='/View_5' component={View_5} />
        <Route exact path='/View_6' component={View_6} />
      </Switch>
    </Router>
  );
}
export default App;
