import userReducer from './user/userReducer'
import postReducer from './posts/postReducer'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  userCreate: userReducer,
  posts: postReducer
});

let store = createStore(
  rootReducer,   
  compose(
    applyMiddleware(thunkMiddleware), 
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

store.subscribe(() => console.log(store.getState()));

export default store;