import React, { useState, useEffect } from 'react';
import ValidationError from './components/ValidationError/ValidationError';
import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup';
import data from './data.json';
import './App.css';

function App() {
  const { categories, classSchedule } = data;

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [birthday, setBirthday] = useState("");
  // const [birthdayError, setBirthdayError] = useState(false);

  const [areaOfStudy, setAreaOfStudy] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  }

  const validate = (target) => {
    const { id, value } = target;

    if (id === 'name') {
      setNameError(!(/^[a-z\d\-\s]+$/i.test(value)));
    } 

    if (id === 'email') {
      return setEmailError(!(/[^@]+@[^.]+\..+/g.test(value)))
    } 
  }

  useEffect(() => {
    const filteredAreas = areaOfStudy.filter(val => val !== null);

    const dateFiltered = classSchedule.filter((scheduleItem) => {
      return filteredAreas.indexOf(scheduleItem.categoryId) !== -1;
    });

    setFilteredClasses(dateFiltered);
  }, [areaOfStudy, classSchedule]);
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
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


        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          onBlur={e => validate(e.target)}
          placeholder="ex: russell@seahawks.com"
          aria-label="Email"
          aria-required="true"
          aria-invalid={emailError}
          required
        />
        <ValidationError showError={emailError} message="You must use a valid email address." />
      
        <label htmlFor="birthday">Birthday</label>
        <input
          id="birthday"
          type="date" 
          value={birthday} 
          onChange={e => setBirthday(e.target.value)}
          required 
        />

        <CheckboxGroup items={categories} updateState={setAreaOfStudy} extract="id" />
        
        <CheckboxGroup items={filteredClasses} updateState={() => {}} extract="classId" />

        <input className="submit" type="submit" value="Submit" disabled={(nameError && emailError)}/>
      </form>
    </div>
  );
}

export default App;
