import React, {Component} from 'react';
import '../../static/css/AdminHome.css'

import CreateMC from './CreateMC';
import CreateFreeResponse from './CreateFreeRespnose';
import CreateSection from './CreateSection';

class AdminHome extends Component{

    render(){
        return(
            <div>
                <h1>Admin Home</h1>
                <div className="leftBox">
                    <CreateFreeResponse/>
                </div>
                <div className="rightBox">
                    <CreateMC/>
                </div>
                <hr></hr>
                <div>
                    <CreateSection/>
                </div>
            </div>
        )
    }
}

export default AdminHome;