import axios from 'axios';
import {GET_ONE_QUESTIONAIRE, GET_COMBINED_BODY, UPDATE_PART_QUESTIONAIRE, UPDATE_BY_NAME, UPDATE_BY_EMAIL, UPDATED_RESPONSEOBJ} from './type'

export const findLink = (id) => dispatch =>{
    axios.get('http://localhost:8000/api/link/'+id)
    .then(function(res){
        const responseObj = res.data;
        axios.get('http://localhost:8000/api/questionaire/'+res.data.for)
        .then(function(res){
            var combinedBody = []
            const questionaireObj = res.data
            for(let i=0; i < questionaireObj.sections.length; i++){
                combinedBody[i]=[]
                for(let j=0; j < questionaireObj.sections[i].questions.length; j++){
                    combinedBody[i][j] = {
                        'question': questionaireObj.sections[i].questions[j],
                        'answer': responseObj.sections[i].answers[j]
                    }
                }
            }
            var payload = {
                'responseObj':responseObj,
                'questionaireObj':questionaireObj,
                'combinedBody':combinedBody
            }
            dispatch({
                type:GET_COMBINED_BODY,
                payload: payload
            })
        })
    })
};

export const getOneQuestionaire = (id) => dispatch =>{
    axios.get('http://localhost:8000/api/questionaire/'+id)
    .then(function(res){
        dispatch({  
            type:GET_ONE_QUESTIONAIRE,
            payload:res.data
        })
    })
};

export function updateQuestionaire(body){
    return(dispatch, getState) =>{
        const {combinedBody} = getState().userState;
        const {responseObj} = getState().userState;
        for(let i=0; i < combinedBody.length; i++ ){
            for(let j=0; j < combinedBody[i].length; j++){
                if(combinedBody[i][j].question._id === body.qID){
                    const payload = {
                        "sectionIndex":i,
                        "answerIndex":j,
                        "answer":body.answer
                    }
                    axios.post('http://localhost:8000/api/link/'+responseObj._id, payload)
                    .then(function(res){
                        console.log(res.data)
                        dispatch({
                            type:UPDATED_RESPONSEOBJ,
                            payload:res.data
                        })  
                    })
                }
            }
        }
    }
};

export const saveUserData = (body) => dispatch => {
    axios.put('http://localhost:8000/api/link/'+body._id, body)
    .then(function(res){
    })
};

export const updateName = (body) => dispatch => {
    dispatch({
        type:UPDATE_BY_NAME,
        payload:body
    })
}

export const updateEmail = (body) => dispatch => {
    dispatch({
        type:UPDATE_BY_EMAIL,
        payload:body
    })
}