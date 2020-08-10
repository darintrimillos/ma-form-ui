import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Confirmation from './Confirmation';
import data from './data.json';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [state, setState] = useState('form');

  useEffect(() => {
    if (Object.keys(formData).length !== 0) {
      setState('confirmation');
    }
  }, [formData]);

  return (
    <div className="App">
      <Form 
        updateState={setFormData} 
        data={data}
        className={state === 'form' ? 'form' : null}
      />
      {
        state === 'confirmation' ?
          <Confirmation formData={formData} data={data} /> : null
      }
    </div>
  );
}

export default App;
