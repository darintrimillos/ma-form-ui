import React from 'react'
import { useHistory } from 'react-router-dom';

function Confirmation(props) {
  const history = useHistory();

  const classesDisplay = props.data.classSchedule
    .map((item, index) => {
      if ( props.formData.selectedClasses && props.formData.selectedClasses.indexOf(index) !== -1) {
        const categoryObj = props.data.categories.find(obj => obj.id === item.categoryId);
        return (
          <React.Fragment>
            <span key={'class-confirmation-' + index}>{categoryObj.label} - {props.data.classSchedule[index].label}</span>
            <br />
          </React.Fragment>
        )
      }
      return false;
    }); 

  return (
    <div className="container">
      <h2 className="center">Confirmation</h2>
      <table>
        <tr>
          <td>Name:</td>
          <td>{props.formData.name}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{props.formData.email}</td>  
        </tr>
        <tr>
          <td>Birthday:</td>
          <td>{props.formData.birthday}</td>  
        </tr>
        <tr>
          <td>Area of Study:</td>
          <td>{ props.formData.areaOfStudy && props.formData.areaOfStudy.map(x => props.data.categories[x].label).join(', ') }</td>
        </tr>
        <tr>
          <td>Classes:</td>
          <td>{ classesDisplay }</td>
        </tr>
      </table>
      {/* <ul>
        { classesDisplay}
      </ul> */}
      
      <div className="button-group">
        <button className="button reject" onClick={() => history.push("/")}>Edit</button>
        <button className="button confirm" onClick={() => history.push("/results")}>Confirm</button>
      </div>
    </div>
  )
}

export default Confirmation;