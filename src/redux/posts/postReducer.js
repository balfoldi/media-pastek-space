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


const postInitialState = {
  loading: false,
  post: [],
  error: "",
};

const postReducer = (state = postInitialState, action) => {
  console.log("postReducer")
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
          error: "",
          post: action.post
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
          error: action.error
      };
    case POST_EDIT:
      return {
        ...state,
        post: action.post
      };

    default:
      return state;
  }
}

export default postReducer;