import React, {Component} from 'react';
import { connect } from 'react-redux';

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
    };

    render(){
        const {combined} = this.props;
        return(
            <div className="card" key={combined.question._id}>
                <form id="freeForm" onSubmit={e=>{
                    e.preventDefault();
                    this.props.updateQuestionaire(this.state)
                }}>
                    <div className="card-body">
                        <h6>{combined.question.question}</h6>
                        <div className="input-group">
                            <textarea onChange={this.handleChange} value={this.state.answer} form="freeForm" className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">UPDATE</button>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(FreeText);