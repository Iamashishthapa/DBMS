import * as actionTypes from "../actions/actions";

const initialState = {
  currentuser: null,
  islogged: false,
};

const isloggedreducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.IS_LOGGED: {
      if (!state.islogged) {
        return {
          ...state,
          currentuser: action.res.name,
          account_type: action.res.account_type,
          email: action.res.email,
          islogged: true,
        };
      } else {
        return {
          ...state,
          currentuser: null,
          account_type: null,
          email: null,
          islogged: false,
        };
      }
    }
    default:
      return state;
  }
};

export default isloggedreducer;
