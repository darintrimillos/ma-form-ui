import React, { useState } from 'react';

function CheckboxGroup(props) {
  const updateState = props.updateState;
  const [state, setState] = useState(() => {
    const checkboxes = props.items.map(item => false);
    return {
      checkboxes: checkboxes,
      checked: [],
      checkedIds: []
    }
  });

  const handleChecked = (e) => {
    const future = state.checkboxes;
    const checkedIndex = e.target.name;
    const checked = [];
    const checkedIds = [];

    future[checkedIndex] = !future[checkedIndex];

    for (let i = 0; i < future.length; i++) {
      if (future[i] === true) {
        checked.push(i);
        checkedIds.push(props.items[i].id);
      }
    }

    setState({
      ...{ checkboxes: future },
      ...{ checked: checked },
      ...{ checkedIds: checkedIds }
    });

    return updateState({
      ...{ checked: checked },
      ...{ checkedIds: checkedIds }
    })
  }

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
          <label htmlFor={checkboxId} className="label">{item.label}</label>
        </li>
      )
    });

  return (
    <fieldset>
      {props.children}
      <ul>
        {checkboxes}
      </ul>
    </fieldset>

  );
}

export default CheckboxGroup;