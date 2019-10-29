
// smurf actions
export const LOAD_START = 'LOAD_START';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE = 'LOAD_FAILURE';

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const EDIT_START = 'EDIT_START';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';


export const initialState = {
	apiInProgress: false,
	apiError: '',
	smurfList: []
};


// smurf reducer function
export const smurfReducer = (state, action) => {
	switch (action.type) {
		case LOAD_START:
			return {...state, apiInProgress: true, apiError: ''};

		case LOAD_SUCCESS:
			return {...state, apiInProgress: false, apiError: '', smurfList: action.payload};

		case LOAD_FAILURE:
			return {...state, apiInProgress: false, apiError: action.payload};


		case ADD_START:
			return {...state, apiInProgress: true, apiError: ''};

		case ADD_SUCCESS:
			return {...state, apiInProgress: false, apiError: '', smurfList: action.payload};

		case ADD_FAILURE:
			return {...state, apiInProgress: false, apiError: action.payload};


		case DELETE_START:
			return {...state, apiInProgress: true, apiError: ''};

		case DELETE_SUCCESS:
			return {...state, apiInProgress: false, apiError: '', smurfList: action.payload};

		case DELETE_FAILURE:
			return {...state, apiInProgress: false, apiError: action.payload};


		case EDIT_START:
			return {...state, apiInProgress: true, apiError: ''};

		case EDIT_SUCCESS:
			return {...state, apiInProgress: false, apiError: '', smurfList: action.payload};

		case EDIT_FAILURE:
			return {...state, apiInProgress: false, apiError: action.payload};


		default:
			return state;
	}
}
