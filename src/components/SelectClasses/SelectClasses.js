import React, { useState, useEffect } from 'react';

function SelectClasses(props) {
  const [state, setState] = useState(() => {
    const checkboxes = props.schedule.map(item => false);
    return {
      checkboxes: checkboxes,
      areaOfStudy: [],
      checked: []
    }
  });
  
  useEffect(() => {
    const areaOfStudy = props.areaOfStudy.filter(val => val !== null);
    setState(prevState => {
      return {...prevState, ...{ areaOfStudy }} 
    }); 
  }, [props.areaOfStudy]);

  const handleChecked = (e) => {
    const future = state.checkboxes;
    const checkedIndex = e.target.name;
    const checked = []

    future[checkedIndex] = !future[checkedIndex];

    for (let i = 0; i < future.length; i++) {
      if (future[i] === true) { 
        checked.push(i);
      }
    }

    setState(prevState => { 
      return { 
        ...prevState, 
        ...{ checkboxes: future },
        ...{ checked: checked }
      }
    });
  }

  const disabled = (isChecked, index) => {
    if (isChecked) {
      console.log('i am checked!')
      return false;
    }

    // for (let i = 0; i < state.checked.length; i++) {

    // }
  }

    // for (let i = 0; i < state.checked.length; i++) {
    //   const checked = props.schedule[state.checked[i]];
    // }

  //   console.log('disabled', checkbox, state.checked);
  //   if (isChecked) return false;

  //   for (let i = 0; i < state.checked.length; i++) {

  //     // checkbox is same category as already checked
  //     if (state.checked.categoryId === checkbox.categoryId) {
  //       console.log('categoryIds match')
  //       return true;
  //     }

  //     console.log('checking times');
  //     const { startDate, endDate } = state.checked[i];
  //     if (startDate > checkbox.startDate) {
  //       if (checkbox.endDate > startDate
  //         || checkbox.endDate > endDate) return true;
  //     } else {
  //       if (endDate > checkbox.startDate
  //         || endDate > checkbox.endDate) return true;
  //     }
  //   }
  //   console.log('still enabled');

  //   return false;
  // }
  // }

  const noAreaOfStudy = () => props.areaOfStudy.length === 0
    ? (<p>Select an Area of Study</p>) 
    : null;

  const scheduleItems = props.schedule
    .map((item, index) => {
      const checkboxId = item.categoryId + '_' + item.classId;
      return (
        <li 
          key={index} 
          hidden={state.areaOfStudy.indexOf(item.categoryId) === -1}
        >
          <input 
            id={checkboxId}
            type="checkbox"
            value={state.checkboxes[index]}
            name={index}
            onChange={handleChecked}
            disabled={disabled(state.checkboxes[index], index)}
          />          
          <label htmlFor={checkboxId}>{ item.categoryLabel}: { item.label }</label>
        </li>
      )
    });

  return (
    <fieldset>
      <h3>Classes</h3>
      { noAreaOfStudy() }
      <ul>
        { scheduleItems }
      </ul>
    </fieldset>
  );
}

export default SelectClasses;