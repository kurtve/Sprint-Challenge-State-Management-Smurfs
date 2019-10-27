// smurf actions
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


// initial smurf state
export const initialState = {
	smurfList: [
		{
			"name": "Brainey",
			"age": 200,
			"height": "5cm",
			"id": 0
		}
	]
};


// smurf reducer function
export const smurfReducer = (state, action) => {
	switch (action.type) {
		case ADD_SMURF:
			return { ...state,
					smurfList: [...state.smurfList, action.payload]
				};

		case UPDATE_SMURF:
			return state;

		case DELETE_SMURF:
			return state;

		default:
			return state;
	}
}
