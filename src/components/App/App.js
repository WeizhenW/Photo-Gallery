import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem'

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
        <div className="allPhotos">
          {this.state.photoList.map(photo => 
            <GalleryItem photo={photo} key={photo.id} />
        )}


        </div>
        

      </div>
    );
  }
}

export default App;
