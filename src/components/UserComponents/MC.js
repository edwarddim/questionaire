import React, {Component} from 'react';
import { connect } from 'react-redux';

import {updateQuestionaire} from '../../actions/userAction';


class MC extends Component{
    state={}
    componentDidMount(){
        const {combined} = this.props;
        this.setState({
            qID: combined.question._id,
            selectedOption:combined.answer.answer
        })
    }
    render(){
        const {combined} = this.props;
        const mcList = combined.question.options.map((option, index) => {
            return(
                <div key={index} className="radio">
                    <label>
                        <input type="radio" name="optradio"
                            checked={ parseInt(this.state.selectedOption, 10) === index }
                            onChange={(e) => this.setState({answer:''+index, selectedOption: ''+index})}
                            />{option}
                    </label>
                </div>
            )
        })
        return(
            <div key={combined.question._id} className="card">
                <div className="card-body">
                    <form id="multiChoice" onSubmit={e => {
                        e.preventDefault();
                        this.props.updateQuestionaire(this.state)
                    }}>
                        <h6>{combined.question.question}</h6>
                        {mcList}
                        <button className="btn btn-primary" type="submit">UPDATE</button>
                    </form>
                </div>
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