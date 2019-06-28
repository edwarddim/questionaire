import {GET_USER_LINK, CLEAR_SECTION_QUEUE, GET_FREE_RESPONSE, GET_MC, ADD_QUESTION_TO_QUEUE, GET_SECTION, ADD_SECTION_TO_QUEUE, GET_QUESTIONAIRE, CLEAR_QUESTIONAIRE_QUEUE, SEND_USER_LINK} from './type';
import axios from 'axios';

export const createFreeResponse = (body) => dispatch =>{
    axios.post('http://localhost:8000/api/freeresponse', body)
    .then(function(res){
        axios.get('http://localhost:8000/api/freeresponse')
        .then(function(res){
            dispatch({
                type:GET_FREE_RESPONSE,
                payload:res.data
            })
        })
    })
}

export const getFreeResponse = () => dispatch =>{
    axios.get('http://localhost:8000/api/freeresponse')
    .then(function(res){
        dispatch({
            type:GET_FREE_RESPONSE,
            payload:res.data
        })
    })
}

export const deleteFreeResponse = (id) => dispatch =>{
    axios.delete('http://localhost:8000/api/freeresponse/'+id)
    .then(function(res){
        axios.get('http://localhost:8000/api/freeresponse')
        .then(function(res){
            dispatch({
                type:GET_FREE_RESPONSE,
                payload:res.data
            })
        })
    })
}

export const createMC = (body) => dispatch =>{
    // const arrLen = body.options.length;
    // for(let i = arrLen-1 ; i > 0 ; i--){
    //     if(body.options[i] === ""){
    //         body.options.splice(i, 1);
    //     }
    // }
    axios.post('http://localhost:8000/api/mc', body)
    .then(function(res){
        axios.get('http://localhost:8000/api/mc')
        .then(function(res){
            dispatch({
                type:GET_MC,
                payload:res.data
            })
        })
    })
}

export const getMC = () => dispatch =>{
    axios.get('http://localhost:8000/api/mc')
    .then(function(res){
        dispatch({
            type:GET_MC,
            payload:res.data
        })
    })
}

export const deleteMC = (id) => dispatch =>{
    axios.delete('http://localhost:8000/api/mc/'+id)
    .then(function(res){
        axios.get('http://localhost:8000/api/mc')
        .then(function(res){
            dispatch({
                type:GET_MC,
                payload:res.data
            })
        })
    })
}

export const createSection = (body) => dispatch =>{
    axios.post('http://localhost:8000/api/section', body)
    .then(function(res){
        dispatch({
            type:CLEAR_SECTION_QUEUE
        })
    })
}

export const getSection = () => dispatch =>{
    axios.get('http://localhost:8000/api/section')
    .then(function(res){
        dispatch({
            type: GET_SECTION,
            payload: res.data
        })
    })
}

export const deleteSection = (id) => dispatch =>{
    axios.delete('http://localhost:8000/api/section/'+id)
    .then(function(res){
        axios.get('http://localhost:8000/api/section')
        .then(function(res){
            dispatch({
                type: GET_SECTION,
                payload: res.data
            })
        })
    })
}

export const addSectionToQuestionaireQueue = (body) => dispatch =>{
    dispatch({
        type: ADD_SECTION_TO_QUEUE,
        payload:body
    })
}

export const addQuestionToSectionQueue = (body) => dispatch =>{
    dispatch({
        type: ADD_QUESTION_TO_QUEUE,
        payload:body
    })
}
export const clearSectionQueue = () => dispatch =>{
    dispatch({
        type:CLEAR_SECTION_QUEUE
    })
}

export const clearQuestionaireQueue = () => dispatch =>{
    dispatch({
        type: CLEAR_QUESTIONAIRE_QUEUE
    })
}

export const createQuestionaire = (body) => dispatch =>{
    axios.post('http://localhost:8000/api/questionaire', body)
    .then(function(res){
        axios.get('http://localhost:8000/api/questionaire')
        .then(function(res){
            dispatch({
                type:GET_QUESTIONAIRE,
                payload:res.data
            })
        })
    })
}

export const getQuestionaire = () => dispatch =>{
    axios.get('http://localhost:8000/api/questionaire')
    .then(function(res){
        
        dispatch({
            type:GET_QUESTIONAIRE,
            payload:res.data
        })
    })
}

export const deleteQuestionaire = (id) => dispatch =>{
    axios.delete('http://localhost:8000/api/questionaire/'+id)
    .then(function(res){
        axios.get('http://localhost:8000/api/questionaire')
        .then(function(res){
            dispatch({
                type:GET_QUESTIONAIRE,
                payload:res.data
            })
        })
    })
}

export const createUserLink = (qBody) => dispatch =>{
    var answerBody={
        by:{
            name:"",
            email:""
        },
        for:qBody._id,
        sections:[]
    };
    qBody.sections.forEach(function(section){
        var newSection={
            'answers':[]
        };
        section.questions.forEach(function(question){
            newSection.answers.push({
                'answer':''
            })
        })
        answerBody.sections.push(newSection)
    })
    axios.post('http://localhost:8000/api/user', answerBody)
    .then(function(res){
        var urlString = "http://localhost:3000/res/"+res.data._id
        dispatch({
            type:SEND_USER_LINK,
            payload:urlString
        })
    })
}

export const getUserLinks = () => dispatch =>{
    axios.get('http://localhost:8000/api/link')
    .then(function(res){
        dispatch({
            type:GET_USER_LINK,
            payload:res.data
        })
    })
}

export const deleteLink = (id) => dispatch =>{
    axios.delete('http://localhost:8000/api/link/'+id)
    .then(function(res){
        axios.get('http://localhost:8000/api/link')
        .then(function(res){
            dispatch({
                type:GET_USER_LINK,
                payload:res.data
            })
        })
    })
};