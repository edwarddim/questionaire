import {CLEAR_SECTION_QUEUE, CLEAR_QUESTIONAIRE_QUEUE,  GET_FREE_RESPONSE, GET_MC, ADD_QUESTION_TO_QUEUE, DELETE_FREE_RESPONSE, DELETE_MC, GET_SECTION, ADD_SECTION_TO_QUEUE, GET_QUESTIONAIRE, GET_USER_LINK, SEND_USER_LINK} from '../actions/type';

const initState = {
    freequestions:[],
    mcquestions:[],
    sectionQueue:[],
    sections:[],
    questionaireQueue:[],
    questionaire:[],
    userLinks:[],
    Link:''
}

export default function(state = initState, action){
    switch(action.type){
        case GET_FREE_RESPONSE:
            return{
                ...state, 
                freequestions:action.payload
            }
        case DELETE_FREE_RESPONSE:
                return state;
        case GET_MC:
            return {
                ...state,
                mcquestions:action.payload
            }
        case DELETE_MC: 
            return state;
        case ADD_QUESTION_TO_QUEUE:
            return {
                ...state,
                sectionQueue:[...state.sectionQueue, action.payload]
            }
        case GET_SECTION:
            return {
                ...state,
                sections:action.payload
            }
        case ADD_SECTION_TO_QUEUE:
            return{
                ...state,
                questionaireQueue:[...state.questionaireQueue, action.payload]
            }
        case CLEAR_SECTION_QUEUE:
            return{
                ...state,
                sectionQueue:{}
            }
        case CLEAR_QUESTIONAIRE_QUEUE:
            return{
                ...state,
                questionaireQueue:[]
            }
        case GET_QUESTIONAIRE:
            return {
                ...state,
                questionaire: action.payload
            }
        case GET_USER_LINK:
            return {
                ...state,
                userLinks:action.payload
            }
        case SEND_USER_LINK:
            return{
                ...state,
                link:action.payload
            }
        default:
            return state;
    }
}