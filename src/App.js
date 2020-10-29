import React from 'react';
import './App.css';
import AppForm from './AppForm';
import AppList from './AppList';
import axios from 'axios';

class App extends React.Component {
  APIurl = "http://localhost:3001/v1/elements/";

  constructor(props) {
    super(props);
    this.state = { elements: '', canConnect: true}
  }

  componentDidMount() {
    this.getElements();
  }

  getElements = () => {
    axios.get(this.APIurl)
    .then(res => {
      this.setState({
        elements: res.data
      })
    })
    .catch(err => {
      this.setState({
        canConnect: false 
      })
    })
  }

  addElement = (newtask) => {
    axios.post(this.APIurl, { element: newtask }).then(res => {
      if (res.status === 200) {
        this.getElements();
      } else {
        console.error('addElement Error');
      }
    })
  }

  updateElement = (index) => {
    axios.put(this.APIurl + index).then( res => {
      if (res.status === 204) {
        this.getElements();
      } else {
        console.error('updateElement Error');
      }
    })
  }

  removeElement = (index) => {
    axios.delete(this.APIurl + index).then(res => {
      if (res.status === 204) {
        this.getElements();
      } else {
        console.error('removeElement Error');
      }
    })
  }

  render() {
    const canConnect = this.state.canConnect;
    return (
      <main className="app" >
        <header className="app-header">
          <h1>ToDo React</h1>
        </header>
        { canConnect
          ? <React.Fragment>
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