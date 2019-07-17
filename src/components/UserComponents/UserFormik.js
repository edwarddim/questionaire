import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {debounce} from 'lodash';
import { Formik, Form, Field, ErrorMessage } from 'formik';


import {saveUserData, updateName, updateEmail} from '../../actions/userAction';


class UserInfo extends Component{

    // state={}

    // componentWillMount(){
    //     const {by}=this.props;
    //     this.setState({
    //         name:by.name,
    //         email:by.email
    //     })
    // }
    // handleNameChange = (text) => {
    //     this.setState({
    //         name:text
    //     })
    //     this.handleSave()
    // }
    // handleEmailChange = (text)=> {
    //     this.setState({
    //         email:text
    //     })
    //     this.handleSave()
    // }
    // handleSave = debounce(() => {
    //     const {responseObj} = this.props.userState;
    //     responseObj.by.name = this.state.name;
    //     responseObj.by.email = this.state.email;
    //     this.props.saveUserData(responseObj)
    // }, 1500)

    render(){
        const {by}=this.props;
        console.log(by)
        return(
            <Formik 
                initialValues={{name: by.name, email: by.email }}
                validate={values => {
                    let errors = {};
                    if(!values.name){
                        errors.name = "Required"
                    }
                    if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ){
                        errors.email = 'Invalid email address'
                    }
                    return errors;
                }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        }, 400);
                        // if(errors.name){
                        //     console.log("name check inside submission")
                        // }
                        // if(errors.email){
                        //     console.log("email check inside submission")
                        // }
                        // console.log(values)
                        // console.log(setSubmitting)
                    }}
            >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="input-group">
                            <div className="input-group-append">
                                <span className="input-group-text">NAME</span>
                            </div>
                                <Field className="form-control" type="text" name="name" />
                            <div className="input-group-append">
                                <span className="input-group-text">EMAIL</span>
                            </div>
                                <Field className="form-control" type="email" name="email" />
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                            <ErrorMessage name="email" component="div" />
                            <ErrorMessage name="name" component="div" />
                        </Form>
                    )}   
                </Formik>
        )
    }
};

const mapStateToProps = (state) =>{
    return{
        userState:state.userState
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        saveUserData:(body) => { dispatch(saveUserData(body)) },
        updateName:(body) => { dispatch(updateName(body)) },
        updateEmail:(body) => { dispatch(updateEmail(body)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);