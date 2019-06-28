import React, {Component} from 'react';
import { connect } from 'react-redux';

import {updateQuestionaire} from '../../actions/userAction';


class MC extends Component{
    state={}
    render(){
        const {combined} = this.props;
        return(
            <div key={combined.question._id}>
                <form id="multiChoice" onSubmit={e => {
                    e.preventDefault();
                    console.log(e.target.value)
                    // this.props.updateQuestionaire(this.state)
                }}>
                    <h6>{combined.question.question}</h6>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="0"/>{combined.question.options[0]}</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="1"/>{combined.question.options[1]}</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="2"/>{combined.question.options[2]}</label>
                    </div>
                    <div className="radio">
                        <label><input type="radio" name="optradio" value="3"/>{combined.question.options[3]}</label>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        userState:state.userState
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        updateQuestionaire: (body) => { dispatch(updateQuestionaire(body)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MC);
