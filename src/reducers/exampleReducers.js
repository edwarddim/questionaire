import {FETCH_EXAMPLE} from '../actions/type';

const initState = {
    item:{}
}

export default function(state = initState, action){
    switch(action.type){
        case FETCH_EXAMPLE:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}