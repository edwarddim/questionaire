import React, {Component} from 'react';

import FreeText from './FreeText';
import MC from './MC';

class UserHome extends Component{
    render(){
        return(
            <div>
                <h1>Questionaire Name</h1>
                <FreeText/>
                <MC/>
            </div>
        )
    }
};
export default UserHome;