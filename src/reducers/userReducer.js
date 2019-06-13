import { CREATE_MC} from '../actions/type';

const initState = {
    question:{}
}

export default function(state = initState, action){
    switch(action.type){
        case CREATE_MC:
            return{
                ...state,
                
            }
    }
}