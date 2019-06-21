import React, {Component} from 'react';
import {connect} from 'react-redux';

import {findLink} from '../../actions/userAction';

class UserResponse extends Component{
    componentWillMount(){
        let id = this.props.match.params.id;
        this.props.findLink(id)
    }
    render(){
        return(
            <div>
                <h1>User Response Page</h1>
            </div>
        )
    }

}

const mapStateToProps = (state) =>{
    return{
        link:state.userState.responseObj
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        findLink:(id) => { dispatch(findLink(id)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserResponse);