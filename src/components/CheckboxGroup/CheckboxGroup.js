import React, { useState, useEffect } from 'react';

function CheckboxGroup(props) {
  const updateState = props.updateState;
  const [state, setState] = useState({});

  const handleChecked = (e) => {
    if (state[e.target.name]) {
      setState({
        ...state,
        [e.target.name]: { 
          isChecked: !state[e.target.name].isChecked,
          id: state[e.target.name].id
        }
      })
    }
  }

  useEffect(() => {
    // set up state if props.items updates
    const groupValues = {};
    props.items.forEach((item, index) => {
      groupValues[index] = { isChecked: false, id: item[props.extract] };
    });
    setState(groupValues);
  }, [props.items, props.extract]);

  useEffect(() => {
    // when checkbox group state updates, update form state
    const values = [];

    Object.keys(state).forEach((key) => {
      if (state[key].isChecked) values.push(state[key].id)
      else values.push(null);
    });

    return updateState(values);
  }, [state, updateState]);

  const checkboxes = props.items
    .map((item, index) => {
      const checkboxId = item.label + '_' + index;
      return (
        <li key={index}>
          <input
            type="checkbox"
            value={item.id}
            id={checkboxId}
            name={index}
            onChange={handleChecked}
          />
          <label htmlFor={checkboxId}>{item.label}</label>
        </li>
      )
    });

  return (
    <fieldset>
      <ul>
        {checkboxes}
      </ul>
    </fieldset>

  );
}

export default CheckboxGroup;