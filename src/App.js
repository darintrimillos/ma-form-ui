import React, { useState } from 'react';
import Form from './components/Form/Form';
import data from './data.json';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <Form updateState={setFormData} data={data} />
    </div>
  );
}

export default App;
