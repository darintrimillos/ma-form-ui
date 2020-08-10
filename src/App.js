import React, { useState, useEffect } from 'react';
import Form from './components/Form/Form';
import Confirmation from './Confirmation';
import data from './data.json';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [state, setState] = useState('form');

  // useEffect(() => {
  //   if (Object.keys(formData).length !== 0) {
  //     setState('confirmation');
  //   } 
  // }, [formData]);

  // useEffect(() => {
  //   if (state === 'results') {
  //     const results = formData;
  //     results.areaOfStudy = formData.categorie.map(i => data.categories[i].id)
  //     results.selectedClasses = formData.selectedClasses.map(k => data.classSchedule[k].classId)
  //   }
  // }, [  ]);

  /*
    App
      - form, passes data back up 
      - confirmation view - data display and buttons?
      - print final json object
  */

  return (
    <div className="App">
      <Form updateState={setFormData} data={data} className={state !== 'form' ? 'hidden' : null} />
      <Confirmation formData={formData} data={data} className={state !== 'confirmation' ? 'hidden' : null} />
      
      <div>
        <h2>Results</h2>
      </div>

      {/* {
        state === 'form' || state === 'edit' ?
          <Form updateState={setFormData} data={data} /> : null
      }


      {
        state === 'confirmation' ?
          <Confirmation formData={formData} data={data} updateState={setState} /> : null
      }

      {
        state === 'results' ?
          <h1>Results</h1> : null
      } */}
    </div>
  );
}

export default App;
