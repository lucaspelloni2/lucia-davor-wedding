import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoState } from "./todos/types";
import todoReducer from "./todos/reducer";

export type RootState = {
  todos: TodoState;
};

const rootReducer = combineReducers({
  todos: todoReducer()
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

export default store;
