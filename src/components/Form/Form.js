import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ValidationError from '../ValidationError/ValidationError';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import SelectClasses from '../SelectClasses/SelectClasses';

function Form(props) {
  const { categories, classSchedule } = props.data;
  const history = useHistory();

  const [formText, setFormText] = useState({
    name: "",
    email: "",
    birthday: ""
  });

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [areaOfStudy, setAreaOfStudy] = useState({
    checked: [],
    checkedIds: []
  });
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleFormText = (e) => {
    setFormText({
      ...formText,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formState = Object.assign({
      ...formText,
      areaOfStudy: areaOfStudy.checked,
      selectedClasses: selectedClasses
    })

    // update formState in parent
    props.updateState(formState);
    history.push('/confirmation');
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
  
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="personal-details">
        <h2>Personal Details</h2>
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
          placeholder="ex: Danger Russ"
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
          placeholder="ex: dangeruss@seahawks.com"
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
      </div>
    
      <CheckboxGroup 
        items={categories} 
        updateState={setAreaOfStudy} 
      >
        <h2>Area of Study</h2>
      </CheckboxGroup>
      
      <SelectClasses 
        schedule={classSchedule} 
        categories={categories} 
        areaOfStudy={areaOfStudy} 
        updateState={setSelectedClasses}
      />
    
      <input className="confirm button" type="submit" value="Submit" disabled={selectedClasses.length === 0}/>
    </form>
  )
}

export default Form;