import React from 'react'

function Confirmation(props) {
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

  const confirm = () => { 
    const data = JSON.stringify(props.formData);
    console.log(data);
    alert('Form json: ', data); 
  }

  // console.log('classesDisplay', classesDisplay)

  return (
    <div>
      <h2>Confirmation</h2>
      <ul>
        <li>Name: { props.formData.name }</li>
        <li>Email: { props.formData.email }</li>
        <li>Birthday: { props.formData.birthday }</li>
        <li>Area of Study: { props.formData.areaOfStudy && props.formData.areaOfStudy.map(x => props.data.categories[x].label).join(', ') }</li>
        { classesDisplay}
      </ul>
      <button onClick={confirm}>Confirm</button>
      <button>Edit</button>
    </div>
  )
}

export default Confirmation;