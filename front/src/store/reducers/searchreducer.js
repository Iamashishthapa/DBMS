import * as actionTypes from '../actions/actions';

const initialState = {
        resp:null,
        got:false
}

export const updatereducer =(state= initialState,action)=>{
        switch(action.type){
                case actionTypes.SET_SEASTATE:
                        return{
                                ...state,
                                resp:action.res,
                                got:true
                        };
                default:
                        return state;
        }

};

export default updatereducer;