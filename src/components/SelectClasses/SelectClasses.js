import React, { useState } from 'react';
import isDisabled from './isDisabled';

function SelectClasses(props) {
  const [state, setState] = useState(() => {
    const checkboxes = props.schedule.map(item => false);
    return {
      checkboxes: checkboxes,
      checked: [],
      checkedCategories: [],
      checkedDates: []
    }
  });

  const handleChecked = (e) => {
    const future = state.checkboxes;
    const checkedIndex = e.target.name;
    const checked = []
    const checkedCategories = [];
    const checkedDates = [];

    future[checkedIndex] = !future[checkedIndex];

    for (let i = 0; i < future.length; i++) {
      if (future[i] === true) { 
        checked.push(i);
        checkedCategories.push(props.schedule[i].categoryId);
        checkedDates.push([props.schedule[i].startDate, props.schedule[i].endDate]);
      }
    }

    setState(prevState => { 
      return { 
        ...prevState, 
        ...{ checkboxes: future },
        ...{ checked: checked },
        ...{ checkedCategories: checkedCategories },
        ...{ checkedDates: checkedDates }
      }
    });
    props.updateState(checked);
  }

  const scheduleItems = props.schedule
    .map((item, index) => {
      const checkboxId = item.categoryId + '_' + item.classId;
      const categoryLabel = props.categories[props.categories.findIndex(x => x.id === item.categoryId)].label;
      return (
        <li 
          key={index} 
          hidden={props.areaOfStudy.checkedIds.indexOf(item.categoryId) === -1}
        >
          <input 
            id={checkboxId}
            type="checkbox"
            value={state.checkboxes[index]}
            name={index}
            onChange={handleChecked}
            disabled={isDisabled(
              state.checkboxes[index],
              item.categoryId,
              state.checkedCategories,
              [item.startDate, item.endDate],
              state.checkedDates
            )}
          />          
          <label 
            htmlFor={checkboxId}
            className={isDisabled(
              state.checkboxes[index],
              item.categoryId,
              state.checkedCategories,
              [item.startDate, item.endDate],
              state.checkedDates
            ) ? 'disabled': null}
          >{ categoryLabel } - {item.label}</label> 
        </li>
      )
    });

  return (
    <fieldset>
      <h3>Classes</h3>
      { props.areaOfStudy.checkedIds.length === 0 ? <p>Select an Area of Study</p> : null }
      <ul>
        { scheduleItems }
      </ul>
    </fieldset>
  );
}

export default SelectClasses;