import {
  FETCH_USER_REQUEST
} from './userTypes'
import {
  FETCH_USER_SUCCESS
} from './userTypes'
import {
  FETCH_USER_FAILURE
} from './userTypes'
import {
  USER_LOGOUT
} from './userTypes'


const userInitialState = {
  loading: false,
  user: {},
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        user: action.user
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error
      };
    case USER_LOGOUT:
      return {
        ...state,
        user:{}
      };
    default:
      return state;
  }
}

export default userReducer;