import {FETCH_EXAMPLE, API_CALL} from './type';
var axios = require('axios');


export const fetchExample = () => dispatch =>{
    dispatch({
        type: FETCH_EXAMPLE,
        payload: "THIS AN EXAMPLE JSON FETCH"
    })
}

export const apiCall = () => dispatch =>{
    axios.get('http://localhost:8000/api/freeresponse')
    .then(function(res){
        console.log(res)
    })
    dispatch({
        type: API_CALL,
        payload: "CHECKING API CONNECTION"
    })
}