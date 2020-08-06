import React, { useState } from 'react';
import ValidationError from './components/ValidationError/ValidationError';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  }

  const validate = (target) => {
    const { id, value } = target;

    if (id === 'name') {
      setNameError(!(/^[a-z\d\-\s]+$/i.test(value)));
    } 
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Home:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={e => validate(e.target)}
          aria-label="Name"
          aria-required="true"
          aria-invalid={nameError}
          required
        />
        <ValidationError showError={nameError} message="You must enter a valid name." />

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
