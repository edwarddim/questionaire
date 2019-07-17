import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUserLink,clearQuestionaireQueue,getSection, addSectionToQuestionaireQueue, deleteSection, createQuestionaire, getQuestionaire, deleteQuestionaire} from '../../actions/adminAction';
import '../../static/css/CreateQuestionaire.css'

class CreateQuetionaire extends Component{
    state = {
        displayName:""
    }

    componentWillMount(){
        this.props.getSection();
        this.props.getQuestionaire();
    }

    handleTitleChange = (e) =>{
        this.setState({displayName:e.target.value})
    }
    sectionClick(sectionObj){
        this.props.addSectionToQuestionaireQueue(sectionObj);
    }
    sectionDelete(id){
        this.props.deleteSection(id);
    }
    createUserLink(qBody){
        this.props.createUserLink(qBody);
    }
    questionaireDelete(id){
        this.props.deleteQuestionaire(id);
    }

    render(){
        const {sectionData} = this.props;
        const sectionList = sectionData.length ? (
            sectionData.map(section=>{
                return(
                    <div key={section._id} className="sectionBox">
                        <p>{section.displayName}</p>
                        <button onClick={() => this.sectionClick(section)}>ADD</button>
                        <button onClick={() => this.sectionDelete(section._id)}>DELETE</button>
                    </div>
                )
            })
        ):(
            <p>LOADING SECTIONS</p>
        )

        const {questionaireQueue} = this.props;
        const queueList = questionaireQueue.length ? (
            questionaireQueue.map(queueItem=>{
                return(
                    <div key={queueItem._id}>
                        <p>{queueItem.displayName}</p>
                    </div>
                )
            })
        ):(
            <p>NOTHING ADDED TO NEW QUESTIONAIRE</p>
        )

        const {questionaireData} = this.props;
        const questionaireList = questionaireData.length? (
            questionaireData.map(questionaire=>{
                return(
                    <div key={questionaire._id}>
                        <p>{questionaire.displayName}</p>
                        <button onClick={() => this.createUserLink(questionaire)}>Create User Link</button>
                        <button onClick={() => this.questionaireDelete(questionaire._id)}>DELETE</button>
                    </div>
                )
            })
        ):(
            <p>Nothing Yet</p>
        )
        const {link} = this.props;
        return(
            <div>
                <div className="questionaireBox">
                    {link}
                    <h4>All Questionaires</h4>
                    {questionaireList}
                </div>
                <div className="queueBox">
                    <form onSubmit={e=>{
                        e.preventDefault();
                        this.props.createQuestionaire({
                            displayName:this.state.displayName,
                            sections: this.props.questionaireQueue
                        })
                        this.setState({
                            displayName:""
                        })
                        e.target.reset();
                        this.props.clearQuestionaireQueue();
                    }} >
                        <div className="input-group mb-3">
                            <input onChange={this.handleTitleChange} type="text" className="form-control" placeholder="Enter your qustionaire Title here"/>
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-outline-primary    ">Create Questionaire</button>
                            </div>
                        </div>
                    </form>
                    {queueList}
                </div>
                <h4>Add Sections to Questionare Creation Queue</h4>
                {sectionList}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        sectionData: state.adminState.sections,
        questionaireQueue: state.adminState.questionaireQueue,
        questionaireData: state.adminState.questionaire,
        link:state.adminState.link
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getSection: () =>{ dispatch(getSection()) },
        addSectionToQuestionaireQueue: (body) => { dispatch(addSectionToQuestionaireQueue(body)) },
        deleteSection: (id) => { dispatch(deleteSection(id)) },
        createQuestionaire: (body) => { dispatch(createQuestionaire(body)) },
        getQuestionaire: () => { dispatch(getQuestionaire()) },
        deleteQuestionaire: (id) => { dispatch(deleteQuestionaire(id)) },
        clearQuestionaireQueue: () => { dispatch(clearQuestionaireQueue()) },
        createUserLink: (qBody) => { dispatch(createUserLink(qBody)) }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuetionaire);