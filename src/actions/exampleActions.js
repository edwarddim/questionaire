import {FETCH_EXAMPLE} from './type';

export const fetchExample = () => dispatch =>{
    dispatch({
        type: FETCH_EXAMPLE,
        payload: "THIS AN EXAMPLE JSON FETCH"
    })
}