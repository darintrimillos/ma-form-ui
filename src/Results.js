import React from 'react'

function Results(props) {
  let { formData } = props;
  formData.areaOfStudy = formData.areaOfStudy && formData.areaOfStudy.map(i => props.data.categories[i].id)
  formData.selectedClasses = formData.selectedClasses && formData.selectedClasses.map(k => props.data.classSchedule[k].classId)
    
  return (
    <div className="container">
      <h2 className="center">Results</h2>
      {JSON.stringify(formData)}
    </div>
  );
}

export default Results;