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
import {
  USER_LOGIN
} from './userTypes'
import Cookies from 'js-cookie'

const userInitialState = {
  loading: false,
  user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {},
  error: "",
};

const userReducer = (state = userInitialState, action) => {
  console.log("userReducer")
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
        user: {}
      };
    case USER_LOGIN:
      console.log("reducer user logging")
      return {
        ...state,
        user: {
          tutu: "tatata"
        } //
      };
    default:
      return state;
  }
}

export default userReducer;