import React, {Component} from 'react';

class InputForm extends Component {
    




    render() {

        return (
            <form>
                <label for="urlInput">Enter Image Url:</label>
                <input id="urlInput"></input>
                <label for="descriptionInput">Enter Image Description</label>
                <input id="descriptionInput"></input>
                <button >Click</button>



            </form>
        )
    }
}

export default InputForm;