import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import List from './List';
import Form from './Form';

function App() {
  const [elements, setElements] = useState([]);

  const getElements = () => {
    axios.get(`http://localhost:3001/v1/elements/`)
      .then(res => {
        console.log(res.data);
        setElements(res.data);
      })
  }

  useEffect( getElements, []);

  const addElement = (element) => {
    axios.post(`http://localhost:3001/v1/elements/`, {element:element})
      .then(res => {
        getElements();
    })
  };

  const updateElement = (index, element) => {
    console.log(index);
    console.log(element);
    axios.put(`http://localhost:3001/v1/elements/`+index, {element:element})
      .then(res => {
        getElements();
    })
  };
  
  const removeElement = (index) => {
    axios.delete(`http://localhost:3001/v1/elements/`+index)
      .then(res => {
        getElements();
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo React</h1>
      </header>
      <Form addElement={addElement}/>
      <List elements={elements} removeElement={removeElement} updateElement={updateElement}/>
    </div>
  );
}

export default App;
