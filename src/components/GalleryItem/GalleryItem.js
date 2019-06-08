import React, {Component} from 'react';

class GalleryItem extends Component {

    state = {
        showPhoto: true,
    }

    handleClick = () => {
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }
    render() {
        return(
            <div onClick = {this.handleClick} className="individualPhoto">
                {this.state.showPhoto? 
                    <img  
                        height="100px" width="100px" 
                        key={this.props.photo.id} 
                        src={this.props.photo.path} 
                        alt={this.props.photo.description}/>
                :
                <div height="100px" width="100px">
                    <p >{this.props.photo.description}</p>
                </div>     
                }
                <br />
                <button>Love it!</button>             
            </div> 
        )
    }
}

export default GalleryItem;