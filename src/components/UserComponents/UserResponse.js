import React, {Component} from 'react';
import {connect} from 'react-redux';
import FreeText from './FreeText';
import MC from './MC';
import UserInfo from './UserInfo';

import {findLink, saveUserData} from '../../actions/userAction';

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
            <p>Loading questionaire</p>
        ):(
            combinedBody.map(function(section, i){
                return(
                    section.map(function(combined, i){
                        if(combined.question.type === 'freetext'){
                            return(
                                <FreeText combined={combined} key={combined.question._id} />
                            )
                        }
                        else{
                            return(
                                <MC combined={combined} key={combined.question._id} />
                            )
                        }
                    })
                )
            })
        )
        const {responseObj} = this.props.userState;
        var byBody = (responseObj === "empty") ? (
            null
        ):(
            <UserInfo by={responseObj.by} />
        )
        return(
            <div key={responseObj._id}>
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
        saveUserData:(body) => { dispatch(saveUserData(body)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserResponse);