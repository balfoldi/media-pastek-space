import userReducer from './user/userReducer'
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux"
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
  userCreate: userReducer,
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