import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createFreeResponse} from '../../actions/adminAction';

class CreateFreeResponse extends Component{
    state = {
        question:''
    }
    handleChange = (e) =>{
        this.setState({
            question: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    this.props.createFreeResponse(this.state);
                }}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Enter Question</span>
                        </div>
                        <textarea onChange={this.handleChange} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Create FreeResponse</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createFreeResponse: (body) =>{ dispatch(createFreeResponse(body)) }
    }
}

export default connect(null,mapDispatchToProps)(CreateFreeResponse);