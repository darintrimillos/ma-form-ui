import React, {useState, useEffect} from 'react';
import ValidationError from '../ValidationError/ValidationError';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import data from '../../data.json';

function Form(props) {
  const { categories, classSchedule } = data;

  const [formText, setFormText] = useState({
    name: "",
    email: "",
    birthday: ""
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [areaOfStudy, setAreaOfStudy] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleFormText = (e) => {
    setFormText({
      ...formText,
      [e.target.id]: e.target.value
    })
  }

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={formText.name}
        onChange={handleFormText}
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
        value={formText.email}
        onChange={handleFormText}
        onBlur={e => validate(e.target)}
        placeholder="ex: russell@seahawks.com"
        aria-label="Email"
        aria-required="true"
        aria-invalid={emailError}
        required
      />
      <ValidationError showError={emailError} message="You must use a valid email address." />
    
      <label htmlFor="birthday">Birthday:</label>
      <input
        id="birthday"
        type="date" 
        value={formText.birthday} 
        onChange={handleFormText}
        required 
      />
    
      <h3>Area of Study</h3>
    
      <CheckboxGroup items={categories} updateState={setAreaOfStudy} extract="id" />
      
      <CheckboxGroup items={filteredClasses} updateState={setSelectedClasses} extract="classId" />
    
      <input className="submit" type="submit" value="Submit" disabled={(nameError && emailError)}/>
    </form>
  )
}

export default Form;