import {
  FETCH_POST_REQUEST
} from './postTypes'
import {
  FETCH_POST_SUCCESS
} from './postTypes'
import {
  FETCH_POST_FAILURE
} from './postTypes'
import {
  POST_EDIT
} from './postTypes'

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    post
  };
};

export const fetchPostFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    error
  };
};

export const postEdit = (post) => {
  return {
    type: POST_EDIT,
    post : post
  };
};