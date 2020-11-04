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

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    error
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
}