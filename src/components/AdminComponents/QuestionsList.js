import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFreeResponse, getMC} from '../../actions/adminAction';

class QuestionList extends Component{

    componentWillMount(){
        this.props.getFreeResponse();
        this.props.getMC();
    }

    render(){
        const {freeresponseData} = this.props;
        const questionsList = freeresponseData.length ? (
            freeresponseData.map(question=>{
                return(
                    <div key={question._id}>
                        <p>{question.question}</p>
                    </div>
                )
            })
        ):(
            <p>LOADING FREE RESPONSE</p>
        )
        const {mcData} = this.props;
        const mcList = mcData.length? (
            mcData.map(mc=>{
                return(
                    <div key={mc._id}>
                        <p>{mc.correct_index}</p>
                        <p>{mc.question}</p>
                    </div>
                )
            })
        ):(
            <p>LOADING MC</p>
        )
        return(
            <div>
                <h3>All Questions</h3>
                <h6>{questionsList}</h6>
                <h6>{mcList}</h6>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        freeresponseData: state.adminState.freequestions,
        mcData: state.adminState.mcquestions
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getFreeResponse: () =>{ dispatch(getFreeResponse()) },
        getMC: () =>{ dispatch(getMC()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);