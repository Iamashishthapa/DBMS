import * as actionTypes from './actions';
import axios from 'axios';

export const setSeaState=(resp)=>{
    return{
        type:actionTypes.SET_SEASTATE,
        res:resp
    }
}
export const searchItem=(search)=>{
    var data={search}
    return dispatch=>{
        axios.post('http://localhost:3001/searchitem',data)
        .then(resp=>{
            dispatch(setSeaState(resp.data));
        })
    }
}