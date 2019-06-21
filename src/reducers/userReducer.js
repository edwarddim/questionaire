import { FIND_LINK} from '../actions/type';

const initState = {
    responseObj:{}
}

export default function(state = initState, action){
    switch(action.type){
        case FIND_LINK:
            return{
                ...state,
                responseObj:action.payload
            }
        default:
            return state;
    }
}