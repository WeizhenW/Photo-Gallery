import React, {Component} from 'react';

class GalleryItem extends Component {

    state = {
        showPhoto: true,
        numberLikes: 0,
    }

    handleClick = () => {
        this.setState({
            showPhoto: !this.state.showPhoto,
        })
    }

    handleLoveButton = () => {
        this.setState({
            numberLikes: this.state.numberLikes + 1,
        })
    }

    render() {
        return(
            <div className="individualPhoto">
                {this.state.showPhoto? 
                    <img  onClick = {this.handleClick}
                        height="100px" width="100px" 
                        key={this.props.photo.id} 
                        src={this.props.photo.path} 
                        alt={this.props.photo.description}/>
                :
                <div height="100px" width="100px">
                    <p onClick = {this.handleClick}>{this.props.photo.description}</p>
                </div>     
                }
                <br />
                <button onClick={this.handleLoveButton}>Love it!</button>
                <div>
                    {this.state.numberLikes === 0?
                        <p>No people love this :(</p>
                    :
                        <p>{this.state.numberLikes} people like this!</p>}
                </div>             
            </div> 
        )
    }
}

export default GalleryItem;