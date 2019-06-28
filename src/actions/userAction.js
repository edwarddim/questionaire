import axios from 'axios';
import {GET_ONE_QUESTIONAIRE, GET_COMBINED_BODY, UPDATE_PART_QUESTIONAIRE} from './type'

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
    axios.get('http://locahost:8000/api/questionaire/'+id)
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
        for(let i=0; i < combinedBody.length; i++ ){
            for(let j=0; j < combinedBody[i].length; j++){
                if(combinedBody[i][j].question._id === body.qID){
                    const payload = {
                        "sectionIndex":i,
                        "answerIndex":j,
                        "answer":body.answer
                    }
                    dispatch({
                        type:UPDATE_PART_QUESTIONAIRE,
                        payload:payload
                    })
                }
            }
        }
    }

    // dispatch({
    //     type:UPDATE_PART_QUESTIONAIRE,
    //     payload: body
    // })
};