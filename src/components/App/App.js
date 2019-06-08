import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  state = ({
    photoList: [],
  });

  //get request to retrieve data from /gallery and store it in the state 
  componentDidMount() {
    axios ({
      method: 'GET',
      url: '/gallery'
    }).then(
      response => {
        //set state to store the data array into the photoList state property
        this.setState({
          photoList: response.data
        })
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
        {/* below pass the photoList state property as a prop to the GalleryList Component */}
        <GalleryList photoList={this.state.photoList} />
      </div>
    );
  }
}

export default App;
