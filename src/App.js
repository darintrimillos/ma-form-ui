import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
