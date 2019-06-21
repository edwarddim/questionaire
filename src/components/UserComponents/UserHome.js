import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserHome extends Component{
    render(){

        return(
            <div>
                <h1>RESPONSE</h1>

            </div>
        )
    }
};

const mapStateToProps = (state) =>{
    return{

    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserHome);