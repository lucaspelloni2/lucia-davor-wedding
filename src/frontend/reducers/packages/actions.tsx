import { ThunkDispatch } from "redux-thunk";
import {
  ActionTypes,
  ErrorPackages,
  FetchedPackages,
  LoadingPackages
} from "./types";
import { getDomain } from "../../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../../helpers/FetchOptions";

export const fetchPackages = (): any => {
  return async (
    dispatch: ThunkDispatch<
      {},
      {},
      FetchedPackages | ErrorPackages | LoadingPackages
    >
  ) => {
    dispatch({
      type: ActionTypes.LOADING_PACKAGES,
      loading: true
    });

    fetch(`${getDomain()}/api/packages`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(r => r.json())
      .then(response => {
        if (response.success) {
          dispatch({
            type: ActionTypes.FETCHED_PACKAGES,
            loading: false,
            packages: response.data
          });
        } else {
          dispatch({
            type: ActionTypes.ERROR_PACKAGES,
            error: "Error fetching packages",
            loading: false
          });
        }
      })
      .catch((error: string) => {
        console.log(error);
        dispatch({
          type: ActionTypes.ERROR_PACKAGES,
          error,
          loading: false
        });
      });
  };
};
