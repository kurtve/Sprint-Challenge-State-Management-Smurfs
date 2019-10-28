
// smurf actions
export const LOAD_SMURFS = 'LOAD_SMURFS';


export const initialState = {
	smurfList: []
};


// smurf reducer function
export const smurfReducer = (state, action) => {
	switch (action.type) {
		case LOAD_SMURFS:
			return {...state, smurfList: action.payload};

		default:
			return state;
	}
}
