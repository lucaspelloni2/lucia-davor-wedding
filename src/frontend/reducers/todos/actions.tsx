import { ThunkDispatch } from "redux-thunk";
import { ActionTypes, ErrorTodos, FetchedTodos, LoadingTodos } from "./types";
import { getDomain } from "../../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../../helpers/FetchOptions";
import { Todo } from "../../model/Todo";

export const fetchTodos = (): any => {
  return async (
    dispatch: ThunkDispatch<{}, {}, FetchedTodos | ErrorTodos | LoadingTodos>
  ) => {
    dispatch({
      type: ActionTypes.LOADING_TODOS,
      loading: true
    });

    //dummy promise
    await new Promise(resolve => setTimeout(resolve, 2000));
    fetch(`${getDomain()}/todos`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(res => res.json())
      .then((todos: Todo[]) => {
        dispatch({
          type: ActionTypes.FETCHED_TODOS,
          loading: false,
          todos
        });
      })
      .catch((error: string) => {
        console.log(error);
        dispatch({
          type: ActionTypes.ERROR_TODOS,
          error,
          loading: false
        });
      });
  };
};
