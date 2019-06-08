import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        return(
            <div className="allPhotos">
                {/* get each individual photo from the list and pass it to GalleryItem Component as a prop */}
                {this.props.photoList.map(photo => 
                    <GalleryItem photo={photo} key={photo.id} />
                )}
            </div>
        )
    }
}

export default GalleryList;