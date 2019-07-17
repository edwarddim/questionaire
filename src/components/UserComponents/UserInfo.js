import React, {Component} from 'react';
import {connect} from 'react-redux';
import {debounce} from 'lodash';

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
    handleNameChange = (text) => {
        this.setState({
            name:text
        })
        this.handleSave()
    }
    handleEmailChange = (text)=> {
        this.setState({
            email:text
        })
        this.handleSave()
    }
    handleSave = debounce(() => {
        const {responseObj} = this.props.userState;
        responseObj.by.name = this.state.name;
        responseObj.by.email = this.state.email;
        this.props.saveUserData(responseObj)
    }, 1500)

    render(){
        const {by}=this.props;
        return(
            <div key={by.name} className="input-group">
                <div className="input-group-append">
                    <span className="input-group-text">NAME</span>
                </div>
                <input type="text" aria-label="name" className="form-control"
                    value={this.state.name}
                    onChange={e => this.handleNameChange(e.target.value)}/>
                <div className="input-group-append">
                    <span className="input-group-text">EMAIL</span>
                </div>
                <input type="email" aria-label="email" className="form-control"
                    value={this.state.email}
                    onChange={(e) => this.handleEmailChange(e.target.value)}/>
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