import React, { useState, useEffect } from 'react';

function CheckboxGroup(props) {
  const updateState = props.updateState;
  
  const groupValues = {};
  props.items.forEach((item, index) => {
    groupValues[index] = { isChecked: false, id: item[props.extract] };
  });
  const [state, setState] = useState(groupValues);

  const handleChecked = (e) => {
    setState({
      ...state,
      [e.currentTarget.name]: { 
        isChecked: !state[e.currentTarget.name].isChecked,
        id: state[e.currentTarget.name].id
      }
    })
  }

  useEffect(() => {
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
        <React.Fragment key={index}>
          <input
            type="checkbox"
            value={item.id}
            id={checkboxId}
            name={index}
            onChange={handleChecked}
          />
          <label htmlFor={checkboxId}>{item.label}</label>
        </React.Fragment>
      )
    });

  return (
    <fieldset>
      {checkboxes}
    </fieldset>

  );
}

export default CheckboxGroup;