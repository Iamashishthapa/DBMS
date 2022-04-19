import * as actionTypes from "./actions";
import axios from "axios";

export const islogged = (resp) => {
  return {
    type: actionTypes.IS_LOGGED,
    res: resp,
  };
};
export const createuser = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:3001/createuser", data);
  };
};
export const login = (data) => {
  return (dispatch) => {
    axios.post("http://localhost:3001/login", data).then((resp) => {
      console.log(resp);
      dispatch(islogged(resp.data));
    });
  };
};

export const addcart=(data)=>{
  return(dispatch)=>{
    
  }
}
