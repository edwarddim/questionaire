import React, {Component} from 'react';

class FreeText extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
        )
    }
}

export default FreeText;