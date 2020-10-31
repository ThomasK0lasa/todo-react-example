import React from 'react';
import './App.css';
import AppForm from './AppForm';
import AppList from './AppList';
import axios from 'axios';

class App extends React.Component {
  APIurl = "http://localhost:3001/v1/elements/";

  constructor(props) {
    super(props);
    this.state = { elements: '', canConnect: null}
  }

  componentDidMount() {
    this.getElements();
  }

  getElements = () => {
    axios.get(this.APIurl)
    .then(res => {
      this.setState({
        elements: res.data,
        canConnect: true
      })
    })
    .catch(err => {
      this.setState({
        canConnect: false 
      })
      console.error("Can't connect to db server")
      throw(err);
    })
  }

  addElement = (newtask) => {
    axios.post(this.APIurl, { element: newtask })
    .then(res => {
      if (res.status === 200) {
        this.getElements();
      }
    })
    .catch(err => {
      console.error('addElement Error')
      throw(err);
    })
  }

  updateElement = (index) => {
    axios.put(this.APIurl + index)
    .then( res => {
      if (res.status === 204) {
        this.getElements();
      }
    })
    .catch(err => {
      console.error('updateElement Error')
      throw(err);
    })
  }

  removeElement = (index) => {
    axios.delete(this.APIurl + index)
    .then(res => {
      if (res.status === 204) {
        this.getElements();
      }
    })
    .catch(err => {
      console.error('removeElement Error')
      throw(err);
    })
  }

  render() {
    const canConnect = this.state.canConnect;
    return (
      <main className="app" >
        <header className="app-header">
          <h1>ToDo React</h1>
        </header>
        { canConnect===null ?
          <p>Loading...</p>
          : canConnect===true ? <React.Fragment>
            <AppForm addElement={this.addElement} />
            <AppList elements={this.state.elements} removeElement={this.removeElement} updateElement={this.updateElement} />
          </React.Fragment>
          : <p className="error">Error when trying to connect to DB. :(</p>
        }
      </main>
    );
  }
}

export default App;