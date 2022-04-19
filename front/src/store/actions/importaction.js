import * as actionTypes from './actions';
import axios from 'axios';

export const setImpState=(resp)=>{
    return{
        type:actionTypes.SET_IMPSTATE,
        res:resp
    }
}
export const importItems=()=>{
    return dispatch=>{
        axios.get('http://localhost:3001/')
        .then(resp=>{
            dispatch(setImpState(resp.data));
        })
    }
}