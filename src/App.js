import React from 'react';
import Home from './View/TemplateHome.jsx/Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { load } from './Components/Text-Speech';

function App() {
  React.useEffect(() => {
    load();
  }, []);
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
