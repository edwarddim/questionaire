import {CREATE_FREE_RESPONSE, GET_FREE_RESPONSE, CREATE_MC, GET_MC} from './type';
import axios from 'axios';

export const createFreeResponse = (body) => dispatch =>{
    axios.post('http://localhost:8000/api/freeresponse', body)
    .then(function(res){
        console.log("Response from backend: ", res)
        dispatch({
            type:CREATE_FREE_RESPONSE,
            payload:res
        })
    })
}

export const getFreeResponse = () => dispatch =>{
    axios.get('http://localhost:8000/api/freeresponse')
    .then(function(res){
        dispatch({
            type:GET_FREE_RESPONSE,
            payload:res.data
        })
    })
}

export const createMC = (body) => dispatch =>{
    axios.post('http://localhost:8000/api/mc', body)
    .then(function(res){
        console.log("CREATING MC: ", res)
        dispatch({
            type:CREATE_MC,
            payload:res
        })
    })
}

export const getMC = () => dispatch =>{
    axios.get('http://localhost:8000/api/mc')
    .then(function(res){
        console.log("GETTING ALL MC: ", res)
        dispatch({
            type:GET_MC,
            payload:res.data
        })
    })
}