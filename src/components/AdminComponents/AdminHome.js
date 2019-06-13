import React, {Component} from 'react';
import '../../static/css/AdminHome.css'

import CreateMC from './CreateMC';
import CreateFreeResponse from './CreateFreeRespnose';
import QuestionsList from './QuestionsList';

class AdminHome extends Component{

    render(){
        return(
            <div className="home">
                <h1>Admin Home</h1>
                <div className="leftBox">
                    <CreateFreeResponse/>
                </div>
                <div className="rightBox">
                    <CreateMC/>
                </div>
                <hr></hr>
                <div>
                    <QuestionsList />
                </div>
            </div>
        )
    }
}

export default AdminHome;