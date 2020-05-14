import React from 'react';
import Home from './View/Home';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}
export default App;
