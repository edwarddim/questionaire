import axios from 'axios';
import {FIND_LINK} from './type'

export const findLink = (id) => dispatch =>{
    axios.get('http://localhost:8000/api/link/'+id)
    .then(function(res){
        dispatch({
            type:FIND_LINK,
            payload:res.data
        })
    })
}