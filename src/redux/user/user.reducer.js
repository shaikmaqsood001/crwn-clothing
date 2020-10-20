import {UserActionTypes} from './user.types'

const INITIAL_STATE = {
  currentUser: null,
};

// state = INITIAL_STATE is setting the default value to a param.
// This is a ES6 feature
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;