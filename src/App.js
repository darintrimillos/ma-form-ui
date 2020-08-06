import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
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
          aria-label="Name"
          aria-required="true"
          required
        />

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
