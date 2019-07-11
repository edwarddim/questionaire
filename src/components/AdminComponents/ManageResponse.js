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
    copyToClipboard(link){
        navigator.clipboard.writeText(link);
    }

    render(){
        const {userLinks} = this.props;
        const userLinksList = userLinks.length ? (
            userLinks.map(link=>{
                return(
                    <div className="card" key={link._id}>
                        <div className="card-body">
                            <p>User: {link.by.name}</p>
                            <p>Email: {link.by.email}</p>
                            {
                                document.queryCommandSupported('copy') && 
                                <button onClick={() => this.copyToClipboard('http://localhost:3000/res/'+link._id)}>Copy Link</button>
                            }
                            <button onClick={() => this.deleteLink(link._id)}>Delete Response</button>
                        </div>
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