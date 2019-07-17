import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearSectionQueue ,getFreeResponse, getMC, addQuestionToSectionQueue, deleteFreeResponse, deleteMC, createSection} from '../../actions/adminAction';
import '../../static/css/CreateSection.css'

class CreateSection extends Component{
    state = {
        sectionName : ""
    }
    componentWillMount(){
        this.props.getFreeResponse();
        this.props.getMC();
    }
    handleTitleChange = (e) =>{
        this.setState({sectionName:e.target.value})
    }
    frClick = (frObj) =>{
        this.props.addQuestionToSectionQueue(frObj)
    }
    mcClick = (mcObj) =>{
        this.props.addQuestionToSectionQueue(mcObj)
    }
    frDelete = (frID) =>{
        this.props.deleteFreeResponse(frID);
    }
    mcDelete = (mcID) =>{
        this.props.deleteMC(mcID);
    }
    render(){
        const {freeresponseData} = this.props;
        const questionsList = freeresponseData.length ? (
            freeresponseData.map(question=>{
                return(
                    <div className="frBox" key={question._id}>
                        <p>QUESITON: {question.question}</p>
                        <button onClick={() => this.frClick(question)}>ADD to QUEUE</button>
                        <button onClick={() => this.frDelete(question._id)}>DELETE</button>
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
                    <div className="mcBox" key={mc._id}>
                        <p>QUESTION: {mc.question}</p>
                        <ul>
                            <li>0: {mc.options[0]}</li>
                            <li>1: {mc.options[1]}</li>
                            <li>2: {mc.options[2]}</li>
                            <li>3: {mc.options[3]}</li>
                        </ul>
                        <button onClick={() => this.mcClick(mc)}>ADD to QUEUE</button>
                        <button onClick={() => this.mcDelete(mc._id)}>DELETE</button>
                    </div>
                )
            })
        ):(
            <p>LOADING MC</p>
        )
        const {sectionQueue} = this.props;
        const queueList = sectionQueue.length? (
            sectionQueue.map(queue=>{
                return(
                    <div key={queue._id}>
                        <p>{queue.question}</p>
                    </div>
                )
            })
        ):(
            <p>NOTHING IN QUEUE</p>
        )
        return(
            <div>
                <div>
                    <div className="queueBox">
                        <form onSubmit={e=>{
                            e.preventDefault();
                            this.props.createSection({
                                displayName:this.state.sectionName,
                                questions:this.props.sectionQueue
                            });
                            this.setState({
                                sectionName:""
                            });
                            this.props.clearSectionQueue();
                            e.target.reset();
                        }}>
                            <div className="input-group mb-3">
                                <input onChange={this.handleTitleChange} type="text" className="form-control" placeholder="Enter your section name here" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-outline-primary">Create Section</button>
                                </div>
                            </div>
                        </form>
                        {queueList}
                    </div>
                </div>
                <div className="leftBox">
                    <h6>FreeResponse List</h6>
                    <hr/>
                    {questionsList}
                </div>
                <div className="rightBox">
                    <h6>MC List</h6>
                    <hr/>
                    {mcList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        freeresponseData: state.adminState.freequestions,
        mcData: state.adminState.mcquestions,
        sectionQueue: state.adminState.sectionQueue
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getFreeResponse: () =>{ dispatch(getFreeResponse()) },
        getMC: () =>{ dispatch(getMC()) },
        deleteFreeResponse: (id) =>{ dispatch(deleteFreeResponse(id)) },
        deleteMC: (id) =>{ dispatch(deleteMC(id)) },
        addQuestionToSectionQueue: (body) => { dispatch(addQuestionToSectionQueue(body)) },
        createSection: (body) =>{ dispatch(createSection(body)) },
        clearSectionQueue: () => { dispatch(clearSectionQueue()) }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateSection);