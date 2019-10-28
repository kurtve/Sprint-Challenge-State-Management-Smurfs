import { LOAD_SMURFS } from '../reducers/smurfReducer';
import axios from "axios";


const smurfURL = 'http://localhost:3333/smurfs';

// Note: the back-end sends the complete list of smurfs for each successful call
// so upon success we can just call LOAD_SMURFS to update the smurf list

export const getSmurfs = (dispatch) => {
  axios
    .get(smurfURL)
      .then(res => {
        dispatch({type: LOAD_SMURFS, payload: res.data});
      })
    .catch(err => {
      console.log(err);
    });
};


export const addSmurf = (smurf, dispatch) => {
  axios
    .post(smurfURL, smurf)
      .then(res => {
        dispatch({type: LOAD_SMURFS, payload: res.data});
      })
    .catch(err => {
      console.log(err);
    });
};


export const deleteSmurf = (id, dispatch) => {
  axios
    .delete(`${smurfURL}/${id}`)
      .then(res => {
        dispatch({type: LOAD_SMURFS, payload: res.data});
      })
    .catch(err => {
      console.log(err);
    });
};


export const editSmurf = (smurf, dispatch) => {
  axios
    .put(`${smurfURL}/${smurf.id}`, smurf)
      .then(res => {
        dispatch({type: LOAD_SMURFS, payload: res.data});
      })
    .catch(err => {
      console.log(err);
    });
};

