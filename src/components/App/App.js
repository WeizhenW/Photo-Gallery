import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import InputForm from '../InputForm/InputForm';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  state = ({
    photoList: [],
  });
  
  //function to perform a get request 
  //to retrieve data from /gallery and store it in the state 
  loadImage = () => {
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

  //call loadImage function after componentDidMount
  componentDidMount() {
    this.loadImage();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>

        <div >
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <InputForm loadImage={this.loadImage} />
            </Grid>
            
            <Grid item xs={12} md={9}>
              {/* below pass the photoList state property as a prop to the GalleryList Component */}
              <GalleryList photoList={this.state.photoList} loadImage = {this.loadImage} /> 
            </Grid>
          </Grid>
        </div>
        
      </div>
    );
  }
}

export default App;
