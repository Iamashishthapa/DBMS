import * as actionTypes from '../actions/actions';

const initialState = {
        resp:null,
        got:false
}

const getreducer =(state= initialState,action)=>{
        switch(action.type){
                case actionTypes.SET_IMPSTATE:
                        return{
                                ...state,
                                resp:action.res,
                                got:true
                        };
                default:
                        return state;
        }

};

export default getreducer;