import { FIND_LINK  , GET_ONE_QUESTIONAIRE, GET_COMBINED_BODY, UPDATE_PART_QUESTIONAIRE} from '../actions/type';
import { updateQuestionaire } from '../actions/userAction';

const initState = {
    responseObj:"empty",
    questionaireObj:"empty",
    combinedBody:"empty"
}

export default function(state = initState, action){
    switch(action.type){
        case GET_ONE_QUESTIONAIRE:
            return{
                ...state,
                quesetionaireObj:action.payload
            }
        case GET_COMBINED_BODY:
            return{
                ...state,
                combinedBody:action.payload.combinedBody,
                responseObj:action.payload.responseObj,
                questionaireObj:action.payload.questionaireObj
            }
        case UPDATE_PART_QUESTIONAIRE:
            const list = state.responseObj.sections.map((section, sectionIndex) => {
                if(sectionIndex === action.payload.sectionIndex){
                    return(
                        section.answers.map((answer, answerIndex) => {
                            if(answerIndex === action.payload.answerIndex){
                                return answer.answer = action.payload.answer
                            }
                            else{
                                return answer
                            }
                        })
                    )
                }
                else{
                    return section
                }
            })
            return{
                ...state,
                responseObj:list
            }

        default:
            return state;
    }
}