import React, {Component} from 'react';
import { connect } from 'react-redux';
import {debounce} from 'lodash';

import {updateQuestionaire} from '../../actions/userAction';

class FreeText extends Component {

    state={}

    componentDidMount(){
        const {combined} = this.props;
        this.setState({
            qID: combined.question._id,
            answer:combined.answer.answer
        })
    };
    handleChange = (e) => {
        this.setState({
            answer:e.target.value
        })
        this.handleSave()
    };
    handleSave = debounce(()=>{
        this.props.updateQuestionaire(this.state)
    }, 1000)
    
    render(){
        const {combined} = this.props;
        return(
            <div className="card">
                <div className="card-body">
                    <h6>{combined.question.question}</h6>
                    <div className="input-group">
                        <textarea onChange={this.handleChange} value={this.state.answer} form="freeForm" className="form-control" aria-label="With textarea"></textarea>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FreeText);