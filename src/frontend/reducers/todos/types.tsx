import { Todo } from "../../model/Todo";

export enum ActionTypes {
  LOADING_TODOS = "LOADING_TODOS",
  FETCHED_TODOS = "FETCHED_TODOS",
  ERROR_TODOS = "ERROR_TODOS"
}

/**
 * Action Types
 */
export type LoadingTodos = {
  type: ActionTypes.LOADING_TODOS;
  loading: boolean;
};
export type FetchedTodos = {
  todos: Todo[];
  type: ActionTypes.FETCHED_TODOS;
  loading: boolean;
};
export type ErrorTodos = {
  type: ActionTypes.ERROR_TODOS;
  error: string;
  loading: boolean;
};

/**
 * State Type
 */
export type TodoState = {
  todos: Todo[];
  loading: boolean;
  error?: string;
};
