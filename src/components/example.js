import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchExample} from '../actions/exampleActions';

class Example extends Component {

    componentWillMount(){
        this.props.fetchExample();
    }

    render() {
        console.log(this.props.example)
        return (
        <div>
            <h1>EXAMPLE</h1>
        </div>
        )
    }
}

Example.propTypes = {
    fetchExample: PropTypes.func.isRequired,
    example: PropTypes.string
}

const mapStateToProps = state =>({
    example: state.example.item
})

export default connect(mapStateToProps, {fetchExample})(Example)