import { Action } from 'redux';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export interface FetchDataRequestAction extends Action<typeof FETCH_DATA_REQUEST> {
  payload: string;
}

export interface FetchDataSuccessAction extends Action<typeof FETCH_DATA_SUCCESS> {
  payload: any[];
}

export interface FetchDataFailureAction extends Action<typeof FETCH_DATA_FAILURE> {
  payload: string;
}

export type DataActions =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;

export const fetchDataRequest = (symbol: string): FetchDataRequestAction => ({
  type: FETCH_DATA_REQUEST,
  payload: symbol,
});

export const fetchDataSuccess = (data: any[]): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string): FetchDataFailureAction => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
