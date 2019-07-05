import React, {Component} from 'react';
import {connect} from 'react-redux';
import FreeText from './FreeText';
import MC from './MC';
import UserInfo from './UserInfo';

import {findLink} from '../../actions/userAction';

class UserResponse extends Component{
    state = {};
    componentWillMount(){
        let id = this.props.match.params.id;
        this.props.findLink(id);
    }
    componentWillUnmount(){
        const {responseObj} = this.props.userState;
        this.props.saveUserData(responseObj)
    }
    
    render(){
        const {combinedBody} = this.props.userState;
        var showBody = (combinedBody === "empty") ? (
            <p>THIS IS WHERE THE RESPONSE BODY SHOULD GO</p>
        ):(
            combinedBody.map(function(section, i){
                return(
                    section.map(function(combined, i){
                        if(combined.question.type === 'freetext'){
                            return(
                                <FreeText combined={combined} />
                            )
                        }
                        else{
                            return(
                                <MC combined={combined} />
                            )
                        }
                    })
                )
            })
        )
        const {responseObj} = this.props.userState;
        var byBody = (responseObj === "empty") ? (
            <div className="input-group">
                <div className="input-group-append">
                    <span className="input-group-text">NAME</span>
                </div>
                <input type="text" aria-label="name" className="form-control"
                    onChange={(e) => this.handleNameChange(e)}/>
                <div className="input-group-append">
                    <span className="input-group-text">EMAIL</span>
                </div>
                <input type="email" aria-label="email" className="form-control"
                    onChange={(e) => this.handleEmailChange(e)}/>
                <button className="btn btn-primary" onClick={()=>this.handleSave()}>SAVE ALL</button>
            </div>
        ):(
            <UserInfo by={responseObj.by} />
        )
        return(
            <div>
                <h1>User Response Page</h1>
                <hr></hr>
                {byBody}
                {showBody}
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
        findLink:(id) => { dispatch(findLink(id)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserResponse);