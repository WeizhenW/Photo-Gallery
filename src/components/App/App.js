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
    ).catch(
      error => {
        console.log('error with axios get route', error );
      }
    )
  }

  //put request to update the # of likes in the data file on server
  handleClickButton = (event) => {
    //axios put request
    axios ({
      method: 'PUT',
      url: '/gallery/like/' + event.target.id,
    }).then(
      //followed by a get request to retrieve updated data and reload the page
      axios ({
        method: 'GET',
        url: '/gallery'
      }).then(
        response => {
          this.setState({
            photoList: response.data
          })
        }
      ).catch(
        error => {
          console.log('error with axios get route', error );
        }
      )
    ).catch(
      error => {
        console.log('error with axios put route', error);
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
        <GalleryList photoList={this.state.photoList} handleClickButton = {this.handleClickButton} />
      </div>
    );
  }
}

export default App;
