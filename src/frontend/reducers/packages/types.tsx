import { Package } from "../../components/ListaNozze";

export enum ActionTypes {
  LOADING_PACKAGES = "LOADING_PACKAGES",
  FETCHED_PACKAGES = "FETCHED_PACKAGES",
  ERROR_PACKAGES = "ERROR_PACKAGES"
}

/**
 * Action Types
 */
export type LoadingPackages = {
  type: ActionTypes.LOADING_PACKAGES;
  loading: boolean;
};
export type FetchedPackages = {
  packages: Package[];
  type: ActionTypes.FETCHED_PACKAGES;
  loading: boolean;
};
export type ErrorPackages = {
  type: ActionTypes.ERROR_PACKAGES;
  error: string;
  loading: boolean;
};

/**
 * State Type
 */
export type PackageState = {
  packages: Package[];
  loading: boolean;
  error?: string;
};
