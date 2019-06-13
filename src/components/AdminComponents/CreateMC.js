import React, {Component} from 'react';
import {createMC} from '../../actions/adminAction';
import {connect} from 'react-redux';

class CreateMC extends Component{
    state ={
        question:"",
        option1:"",
        option2:"",
        option3:"",
        option4:"",
        correct_index:""
    }
    handleQuestion = (e) =>{
        this.setState({ question:e.target.value})
    }
    handleOption1 = (e) =>{
        this.setState({option1:e.target.value})
    }
    handleOption2 = (e) =>{
        this.setState({option2:e.target.value})
    }
    handleOption3 = (e) =>{
        this.setState({option3:e.target.value})
    }
    handleOption4 = (e) =>{
        this.setState({option4:e.target.value})
    }
    handleClick = (e) =>{
        this.setState({correct_index:e.target.value})
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>{
                    e.preventDefault();
                    this.props.createMC({
                        question:this.state.question,
                        options:[
                            this.state.option1,
                            this.state.option2,
                            this.state.option3,
                            this.state.option4,
                        ],
                        correct_index:this.state.correct_index
                    })
                }} name="multiChoice">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Enter Question</span>
                    </div>
                    <textarea onChange={this.handleQuestion} className="form-control" aria-label="With textarea"></textarea>
                </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Option1</span>
                        </div>
                        <input onChange={this.handleOption1} type="text" className="form-control" aria-label="Text input with radio button"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Option2</span>
                        </div>
                        <input onChange={this.handleOption2} type="text" className="form-control" aria-label="Text input with radio button"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Option3</span>
                        </div>
                        <input onChange={this.handleOption3} type="text" className="form-control" aria-label="Text input with radio button"/>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Option4</span>
                        </div>
                        <input onChange={this.handleOption4} type="text" className="form-control" aria-label="Text input with radio button"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Correct Answer</label>
                        </div>
                        <select onClick={this.handleClick} className="custom-select" id="inputGroupSelect01">
                            <option value="0">Option 1</option>
                            <option value="1">Option 2</option>
                            <option value="2">Option 3</option>
                            <option value="3">Option 4</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Create MC</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createMC:(body) =>{dispatch(createMC(body))}
    }
}

export default connect(null, mapDispatchToProps)(CreateMC);