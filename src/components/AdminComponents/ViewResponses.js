import React, {Component} from 'react';
import {connect} from 'react-redux';
import {debounce} from 'lodash';

import {getUserLinks, findLinkByName} from '../../actions/adminAction';

class ViewResponses extends Component{

    state={}

    componentWillMount(){
        this.props.getUserLinks();
    }
    handleNameChange = debounce((name)=>{
        if(name) return this.props.findLinkByName(name);
        else return this.props.getUserLinks();
    }, 1000)

    render(){
        const {userLinks} = this.props;
        const userLinksBody = userLinks.length ? (
            userLinks.map(link=>{
                return(
                    <tr key={link._id}>
                        <td>{link.by.name}</td>
                        <td>{link.by.email}</td>
                        <td><a href={"http://localhost:3000/res/" + link._id }>See!</a></td>
                    </tr>
                )
            })
        ):(
            <tr>
                <td>Grabbing links...</td>
            </tr>
        )

        return(
            <div>
                <h1>View Responses</h1>
                <div className="input-group">
                    <div className="input-group-append">
                        <span className="input-group-text">Search by Name</span>
                    </div>
                    <input type="text" aria-label="name" className="form-control"
                        onChange={e => this.handleNameChange(e.target.value)}/>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>View Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userLinksBody}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        userLinks:state.adminState.userLinks
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        getUserLinks: () => { dispatch(getUserLinks()) },
        findLinkByName: (name) => { dispatch(findLinkByName(name)) }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewResponses);