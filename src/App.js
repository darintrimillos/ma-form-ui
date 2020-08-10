import React, { useState } from 'react';
import Form from './components/Form/Form';
import Confirmation from './Confirmation';
import Results from './Results';
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
    <React.Fragment>
      <h1>Register for Classes</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form updateState={setFormData} data={data} />
          </Route>
          <Route path="/confirmation">
            <Confirmation formData={formData} data={data} />
          </Route>
          <Route path="/results">
            <Results formData={formData} data={data} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
