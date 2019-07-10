import React, {Component} from 'react';
import {connect} from 'react-redux';

import {saveUserData, updateName, updateEmail} from '../../actions/userAction';


class UserInfo extends Component{

    state={}

    componentWillMount(){
        const {by}=this.props;
        this.setState({
            name:by.name,
            email:by.email
        })
    }
    componentWillUnmount(){
        console.log("UNMOUNTING USERINFO COMPONENT")
    }
    handleNameChange(e){
        this.props.updateName(e.target.value)
        this.setState({
            name:e.target.value
        })
    }
    handleEmailChange(e){
        this.props.updateEmail(e.target.value)
        this.setState({
            email:e.target.value
        })
    }
    handleSave(){
        const {responseObj} = this.props.userState;
        responseObj.by.name = this.state.name;
        responseObj.by.email = this.state.email;
        this.props.saveUserData(responseObj)
    }

    render(){
        return(
            <div className="input-group">
                <div className="input-group-append">
                    <span className="input-group-text">NAME</span>
                </div>
                <input type="text" aria-label="name" className="form-control"
                    value={this.state.name}
                    onChange={(e) => this.handleNameChange(e)}/>
                <div className="input-group-append">
                    <span className="input-group-text">EMAIL</span>
                </div>
                <input type="email" aria-label="email" className="form-control"
                    value={this.state.email}
                    onChange={(e) => this.handleEmailChange(e)}/>
                <button className="btn btn-primary" onClick={()=>this.handleSave()}>SAVE ALL</button>
            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return{
        userState:state.userState
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        saveUserData:(body) => { dispatch(saveUserData(body)) },
        updateName:(body) => { dispatch(updateName(body)) },
        updateEmail:(body) => { dispatch(updateEmail(body)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);