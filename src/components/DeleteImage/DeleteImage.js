import React, {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './DeleteImage.css';



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
                <Button  variant="contained" color="secondary"  className = "deleteButton" onClick={this.deletePhoto}>
                    Delete
                    {/* <DeleteIcon /> */}
                </Button>
            </>

        )
    }
}

export default DeleteImage;