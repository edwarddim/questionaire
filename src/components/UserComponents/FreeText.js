import React, {Component} from 'react';

class FreeText extends Component{
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h4>FreeText Question</h4>
                    <input type="textarea"></input>
                </div>
            </div>
        )
    }
}

export default FreeText;