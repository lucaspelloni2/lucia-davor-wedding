import {ActionTypes, ErrorPackages, FetchedPackages, LoadingPackages, PackageState} from "./types";

const initialState: PackageState = {
  packages: [],
  loading: false
};

const packagesReducer = () => {
  return (
    state = initialState,
    action: FetchedPackages | ErrorPackages | LoadingPackages
  ) => {
    switch (action.type) {
      case ActionTypes.LOADING_PACKAGES:
        return { ...state, loading: action.loading };
      case ActionTypes.FETCHED_PACKAGES:
        return {
          ...state,
          packages: action.packages,
          loading: action.loading
        };
      case ActionTypes.ERROR_PACKAGES:
        return { ...state, error: action.error, loading: action.loading };
      default:
        return state;
    }
  };
};

export default packagesReducer;
