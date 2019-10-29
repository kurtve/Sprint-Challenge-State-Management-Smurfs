import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../reducers/smurfReducer';
import { ADD_START, ADD_SUCCESS, ADD_FAILURE } from '../reducers/smurfReducer';
import { DELETE_START, DELETE_SUCCESS, DELETE_FAILURE } from '../reducers/smurfReducer';
import { EDIT_START, EDIT_SUCCESS, EDIT_FAILURE } from '../reducers/smurfReducer';
import axios from "axios";

const smurfURL = 'http://localhost:3333/smurfs';

// Note: the back-end sends the complete list of smurfs for each successful call

export const getSmurfs = (dispatch) => {
	dispatch({type: LOAD_START});
	axios
    	.get(smurfURL)
    	.then(res => {
        	dispatch({type: LOAD_SUCCESS, payload: res.data});
    	})
    	.catch(err => {
    		dispatch({type: LOAD_FAILURE, payload: err});
    	});
};


export const addSmurf = (smurf, dispatch) => {
	dispatch({type: ADD_START});
	axios
    	.post(smurfURL, smurf)
    	.then(res => {
        	dispatch({type: ADD_SUCCESS, payload: res.data});
      	})
    	.catch(err => {
      		dispatch({type: ADD_FAILURE, payload: err});
	    });
};


export const deleteSmurf = (id, dispatch) => {
    dispatch({type: DELETE_START});
    axios
        .delete(`${smurfURL}/${id}`)
        .then(res => {
            dispatch({type: DELETE_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: DELETE_FAILURE, payload: err});
        });
};


export const editSmurf = (smurf, dispatch) => {
    dispatch({type: EDIT_START});
    axios
        .put(`${smurfURL}/${smurf.id}`, smurf)
        .then(res => {
            dispatch({type: EDIT_SUCCESS, payload: res.data});
        })
        .catch(err => {
            dispatch({type: EDIT_FAILURE, payload: err});
        });
};

