import logo from './logo.svg';
import {nanoid} from 'nanoid';
import './App.css';
import React, { Fragment, useState } from 'react';
import cars from "./cars.json";
import ReadOnlyRow from './components/ReadOnlyRow';
import EditableRow from './components/EditableRow';

function App() {

  const [contacts, setContacts] = useState(cars);
  const [editContactID, setEditContactID] = useState(null)
  const [addFormData, setaddFormData] = useState({
    make: '',
    model: '',
    colour: '',
    year: ''
  })

  const [editFormData, setEditFormData] = useState({
    make: '',
    model: '',
    colour: '',
    year: ''
  })

  

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute('name');
    const fieldvalue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldname] = fieldvalue;

    setaddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const editedInfo = { ...editFormData}
    editedInfo[fieldname] = fieldValue;

    setEditFormData(editedInfo)

  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newCar = {
      id: nanoid(),
      make: addFormData.make,
      model: addFormData.model,
      colour: addFormData.colour,
      year: addFormData.year,
    };

    const newContacts = [...contacts, newCar];

    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedinfo = {
      id: nanoid(),
      make: editFormData.make,
      model: editFormData.model,
      colour: editFormData.colour,
      year: editFormData.year,
    };

    const newcars = [...contacts]

    const index = contacts.findIndex((contact) => contact.id === editContactID)

    newcars[index] = editedinfo

    setContacts(newcars)
    setEditContactID(null)
 
  }

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactID(contact.id);

    const formValues = {
      make: contact.make,
      model: contact.model,
      colour: contact.colour,
      year: contact.year
    }

    setEditFormData(formValues)


  }

  return (
    <div className="App">
      <header className="App-form">

        <h2>Add a car </h2>
        <form onSubmit = {handleAddFormSubmit} >

          <label for="make"> make: </label> 
          <input 
            type="text" 
            name="make" 
            required="required"
            placeholder="Please enter make .."
            onChange={handleAddFormChange}
          /> 

          <label for="model"> model: </label>
          <input 
            type="text" 
            name="model" 
            required="required"
            placeholder="Please enter model .."
            onChange={handleAddFormChange}
            
          /> 

          <label for="colour"> colour: </label> 
          <input 
            type="text" 
            name="colour" 
            required="required"
            placeholder="Please enter colour .."
            onChange={handleAddFormChange}
            
          /> 

          <label for="year"> year: </label>
          <input 
            type="text" 
            name="year" 
            required="required"
            placeholder="Please enter make .."
            onChange={handleAddFormChange}
          /> 
        
          <input type="submit" text="Add Car"/>

        </form>
      </header>

      <header className="App-Table">

        <form onsubmit={handleEditFormSubmit}>

          <table>
            <thead>
              <tr>
                <th> make </th>
                <th> model </th>
                <th> colour </th>
                <th> year </th>
                <th> actions </th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  { editContactID === contact.id ? (
               
                    <EditableRow
                      editFormData={editFormData}
                      handleEditFormChange = {handleEditFormChange}
                    />

                  ) : (

                    <ReadOnlyRow 
                      contact = {contact} 
                      handleEditClick={handleEditClick}
                    />

                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
      </header>

    </div>
  );
}

export default App;
