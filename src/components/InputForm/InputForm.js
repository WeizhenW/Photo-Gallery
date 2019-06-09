import React, {Component} from 'react';
import axios from 'axios';
import './InputForm.css';

class InputForm extends Component {

    state = {
        url: '',
        description: '',
        //initialize the counter => to be used as id for new photo
        counter: 10,
    }
    
    //function to capture the input and change the value in the state respectively
    handleChangeFor =(propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        })
    }

    //function to perform a post request to the data file on server 
    //and then reload the page
    handleSubmit = () => {
        console.log(this.state);
        axios({
            method: 'POST',
            url: '/gallery',
            //pass the data obj with the information input
            data: {
                id: this.state.counter,
                path: this.state.url,
                description: this.state.description,
                likes: 0,
            }
        }).then(
            () => {
                //counter + 1
                this.setState({
                    counter: this.state.counter + 1,
                    //empty input fields
                    url: '',
                    description: '',
                })

                //reload the page
                this.props.loadImage();

            }
        ).catch(
            error => {
                console.log('error with post request', error);
            }
        )
    }
    
    render() {

        return (
            <div className="inputForm" >
                <input onChange={this.handleChangeFor('url')} value={this.state.url} id="urlInput" placeholder="Enter image url"></input>
                <input onChange={this.handleChangeFor('description')} value={this.state.description} id="descriptionInput" placeholder="Enter image description"></input>
                <button onClick={this.handleSubmit} id="submitButton">Submit Image</button>
            </div>
        )
    }
}

export default InputForm;