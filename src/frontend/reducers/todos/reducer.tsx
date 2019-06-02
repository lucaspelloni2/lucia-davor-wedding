import {
  ActionTypes,
  ErrorTodos,
  FetchedTodos,
  LoadingTodos,
  TodoState
} from "./types";

const initialState: TodoState = {
  todos: [],
  loading: false
};

const todoReducer = () => {
  return (
    state = initialState,
    action: FetchedTodos | ErrorTodos | LoadingTodos
  ) => {
    switch (action.type) {
      case ActionTypes.LOADING_TODOS:
        return { ...state, loading: action.loading };
      case ActionTypes.FETCHED_TODOS:
        console.log("ajisfjoa");
        return {
          ...state,
          todos: action.todos,
          loading: action.loading
        };
      case ActionTypes.ERROR_TODOS:
        return { ...state, error: action.error, loading: action.loading };
      default:
        return state;
    }
  };
};

export default todoReducer;
