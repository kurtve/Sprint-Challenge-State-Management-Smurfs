// smurf actions
export const ADD_SMURF = 'ADD_SMURF';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF = 'DELETE_SMURF';


// initial smurf state
export const initialState = {
	maxId: 0,
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
			const newId = state.maxId + 1;
			const newSmurf = {...action.payload, id: newId};

			return { ...state,
					maxId: newId,
					smurfList: [...state.smurfList, newSmurf]
				};

		case UPDATE_SMURF:
			return state;

		case DELETE_SMURF:
			return state;

		default:
			return state;
	}
}
