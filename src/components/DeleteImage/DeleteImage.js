import React, {Component} from 'react';
import axios from 'axios';

class DeleteImage extends Component {
    //function to perform the delete request to server and then reload the page
    deletePhoto = () => {
        //get the id of the photo
        const idToDelete = this.props.id
        axios({
            method: 'DELETE',
            url: '/gallery/delete/' + idToDelete,
        }).then(
            () => {
                this.props.loadImage();
            }
        )
    }


    render() {
        return(
            <>
                {/* button with click event listener to trigger the delete of the photo */}
                <button onClick={this.deletePhoto} className="deleteButton">Delete</button>
            </>

        )
    }
}

export default DeleteImage;