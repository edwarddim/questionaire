import {CREATE_FREE_RESPONSE, CREATE_MC, GET_FREE_RESPONSE, GET_MC} from '../actions/type';

const initState = {
    freequestions:[],
    mcquestions:[]
}

export default function(state = initState, action){
    switch(action.type){
        case CREATE_FREE_RESPONSE:
            return state;
        case GET_FREE_RESPONSE:
            return{
                ...state, 
                freequestions:action.payload
            }
        case CREATE_MC:
            return state;
        case GET_MC:
            return {
                ...state,
                mcquestions:action.payload
            }
        default:
            return state;
    }
}