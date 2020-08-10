import React from 'react'
import { useHistory } from 'react-router-dom';

function Confirmation(props) {
  const history = useHistory();
  // console.log('confirmation props', props);

  const classesDisplay = props.data.classSchedule
    .map((item, index) => {
      if ( props.formData.selectedClasses && props.formData.selectedClasses.indexOf(index) !== -1) {
        const categoryObj = props.data.categories.find(obj => obj.id === item.categoryId);
        return (
          <li key={'class-confirmation-' + index}>{categoryObj.label}: {props.data.classSchedule[index].label}</li>
        )
      }
      return false;
    }); 

  return (
    <div className="container">
      <h2>Confirmation</h2>
      <ul>
        <li>Name: { props.formData.name }</li>
        <li>Email: { props.formData.email }</li>
        <li>Birthday: { props.formData.birthday }</li>
        <li>Area of Study: { props.formData.areaOfStudy && props.formData.areaOfStudy.map(x => props.data.categories[x].label).join(', ') }</li>
        { classesDisplay}
      </ul>
      <button className="button confirm" onClick={() => history.push("/results")}>Confirm</button>
      <button className="button reject" onClick={() => history.push("/")}>Edit</button>
    </div>
  )
}

export default Confirmation;