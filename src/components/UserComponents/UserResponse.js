import React, {Component} from 'react';
import {connect} from 'react-redux';
import FreeText from './FreeText';
import MC from './MC';

import {findLink} from '../../actions/userAction';
// import UserSection from './UserSection';

class UserResponse extends Component{
    state = {};
    componentWillMount(){
        let id = this.props.match.params.id;
        this.props.findLink(id);
    }
    componentWillUnmount(){
        console.log("component unmounting")
    }
    handleNameChange(e){
        this.setState({
            'name':e.target.value
        })
    }
    handleEmailChange(e){
        this.setState({
            'email':e.target.value
        })
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
        return(
            <div>
                <h1>User Response Page</h1>
                <div className="input-group">
                    <div className="input-group-append">
                        <span className="input-group-text">NAME</span>
                    </div>
                    <input onChange={(e) => this.handleNameChange(e)} type="text" aria-label="name" className="form-control"></input>
                    <div className="input-group-append">
                        <span className="input-group-text">EMAIL</span>
                    </div>
                    <input onChange={(e) => this.handleEmailChange(e)} type="text" aria-label="email" className="form-control"></input>
                </div>
                <hr></hr>
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
        findLink:(id) => { dispatch(findLink(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserResponse);