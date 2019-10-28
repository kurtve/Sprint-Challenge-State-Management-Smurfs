
// smurf actions
export const LOAD_SMURFS = 'LOAD_SMURFS';

export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


export const initialState = {
	smurfList: []
};


// smurf reducer function
export const smurfReducer = (state, action) => {
	switch (action.type) {
		case LOAD_SMURFS:
			return {...state, smurfList: action.payload};

		case ADD_SMURF:
			return state;

		case UPDATE_SMURF:
			return state;

		case DELETE_SMURF:
			return state;

		default:
			return state;
	}
}
