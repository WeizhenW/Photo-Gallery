import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

class GalleryItem extends Component {
    //create a showPhoto state property to indicate if it displays the photo (value = true)
    //or the description (value = false) on the DOM
    state = {
        showPhoto: true,
    }

    //function to toggle the showPhoto value
    handleClickPhoto = () => {
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }
    
    //function to update the # of likes in the data file on server
    handleClickButton = () => {
        axios ({
            method: 'PUT',
            url: '/gallery/like/' + this.props.photo.id,
          }).then(
              () => {
                  //call loadImage function to reload the page
                  this.props.loadImage();
              }
          )
    }

    render() {
        return (
            <div className="individualPhoto">
                {/* ternary operator to the showPhoto value and display either the photo
                or description based on the value */}
                {this.state.showPhoto ?
                    //show photo in case of truthy
                    //attach onClick event listener and call handleClick function
                    <img onClick={this.handleClickPhoto}
                        height="200px" width="200px"
                        key={this.props.photo.id}
                        src={this.props.photo.path}
                        alt={this.props.photo.description} />
                    :
                    //show description in case of falsy
                    <div height="200px" width="200px">
                        {/* attach onClick event listener and call handleClick function */}
                        <p onClick={this.handleClickPhoto}>{this.props.photo.description}</p>
                    </div>
                }
                <br />
                {/* attach onClick event listener and call handleLoveButton function  */}
                <button onClick={this.handleClickButton} id={this.props.photo.id} className="likeButton">Love it!</button>
                <div>
                    {/* ternary operator to display different sentences based on the value retrieved
                    from the photo props */}
                    {this.props.photo.likes === 0 ?
                        <p className="numLikes">No people love this :(</p>
                        :
                        <p className="numLikes">{this.props.photo.likes} people like this!</p>}
                </div>
            </div>
        )
    }
}

export default GalleryItem;