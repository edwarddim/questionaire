import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchExample, apiCall} from '../actions/exampleActions';

class Example extends Component {

    componentWillMount(){
        this.props.fetchExample();
        this.props.apiCall();
    }
    render() {
        return (
        <div>
            <h1>EXAMPLE</h1>
        </div>
        )
    }
}

Example.propTypes = {
    fetchExample: PropTypes.func.isRequired,
    apiCall: PropTypes.func.isRequired,
    example: PropTypes.string
};

const mapStateToProps = state =>({
    example: state.example.item
})

export default connect(mapStateToProps, {fetchExample, apiCall})(Example)