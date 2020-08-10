import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Confirmation from './Confirmation';
import data from './data.json';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Form updateState={setFormData} data={data} />
        </Route>
        <Route path="/confirmation">
          <Confirmation formData={formData} data={data} />
        </Route>
        <Route path="/results">
          <h2>Results</h2>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
