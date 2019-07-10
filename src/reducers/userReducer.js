import { GET_ONE_QUESTIONAIRE, GET_COMBINED_BODY, UPDATE_PART_QUESTIONAIRE, UPDATE_BY_NAME, UPDATE_BY_EMAIL, UPDATED_RESPONSEOBJ} from '../actions/type';


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
            var responseObjCopy = state.responseObj;
            const list = responseObjCopy.sections.map((section, sectionIndex) => {
                if(sectionIndex === action.payload.sectionIndex){
                    section.answers.map((answer, answerIndex) => {
                        if(answerIndex === action.payload.answerIndex){
                            answer.answer = action.payload.answer
                            return answer
                        }
                        else{
                            return answer
                        }
                    })
                    return({
                        answers:section.answers
                    })
                }
                else{
                    return section
                }
            })
            responseObjCopy.sections = list
            return{
                ...state,
                responseObj:responseObjCopy
            }
        case UPDATE_BY_NAME:
            responseObjCopy = state.responseObj;
            responseObjCopy.by.name = action.payload
            return{
                ...state,
                responseObj:responseObjCopy
            }
        case UPDATE_BY_EMAIL:
                responseObjCopy = state.responseObj;
                responseObjCopy.by.email = action.payload
                return{
                    ...state,
                    responseObj:responseObjCopy
                }
        case UPDATED_RESPONSEOBJ:
            return{
                ...state,
                responseObj:action.payload
            }
        default:
            return state;
    }
}