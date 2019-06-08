import {FETCH_EXAMPLE, API_CALL} from './type';
import axios from 'axios';


export const fetchExample = () => dispatch =>{
    dispatch({
        type: FETCH_EXAMPLE,
        payload: "THIS AN EXAMPLE JSON FETCH"
    })
}

export const apiCall = () => dispatch =>{
    console.log("MAKING API CALL")
    axios.get('http://localhost:8000/api', {crossdomain:true})
    .then(function(res){
        console.log("CONSOLE LOGGING RESPONSE FROM BACKEND: ", res)
    })
    dispatch({  
        type: API_CALL,
        payload: "CHECKING API CONNECTION"
    })
}