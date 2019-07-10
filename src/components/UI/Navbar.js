import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/admin">Questionaire</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/user">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/responses">Responses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/createQuestionaire">Questionaire</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/links/manage">Links</Link>
                    </li>
                </ul>
            </div>
            </nav>
        )
    }
}

export default Navbar;