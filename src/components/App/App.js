import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = ({
    photoList: [],
  });

  componentDidMount() {
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then(
      response => {
        console.log(response.data);
        this.setState({
          photoList: response.data
        })
        console.log(this.state.photoList);
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
  }
}

export default App;
