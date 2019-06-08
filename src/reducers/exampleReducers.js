import {FETCH_EXAMPLE, API_CALL} from '../actions/type';

const initState = {
    item:{}
}

export default function(state = initState, action){
    switch(action.type){
        case FETCH_EXAMPLE:
            return {
                ...state,
                example_text: action.payload
            }
        case API_CALL:
            return {
                ...state,
                api_call_text: action.payload
            }
        default:
            return state;
    }
}