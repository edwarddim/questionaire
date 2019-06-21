import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUserLinks, deleteLink} from '../../actions/adminAction';

class ManageResposne extends Component{
    componentWillMount(){
        this.props.getUserLinks();
    }
    deleteLink(id){
        this.props.deleteLink(id);
    }

    render(){
        const {userLinks} = this.props;
        const userLinksList = userLinks.length ? (
            userLinks.map(links=>{
                return(
                    <div key={links._id}>
                        <p>For: {links.for}</p>
                        <button onClick={() => this.deleteLink(links._id)}>Delete Link</button>
                    </div>
                )
            })
        ):(
            <p>Loading...</p>
        )
        return(
            <div>
                {userLinksList}
            </div>
        )
    }    

};

const mapStateToProps = (state) =>{
    return{
        userLinks:state.adminState.userLinks
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        getUserLinks:() => { dispatch(getUserLinks()) },
        deleteLink:(id) => { dispatch(deleteLink(id)) }
    }
};

export default connect( mapStateToProps, mapDispatchToProps)(ManageResposne);