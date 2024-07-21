export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const SET_SYMBOL = 'SET_SYMBOL';

export interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
  payload: string;
}

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any[];
}

export interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  payload: string;
}

export interface SetSymbolAction {
  type: typeof SET_SYMBOL;
  payload: string;
}

export type DataActions =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction
  | SetSymbolAction;

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

export const setSymbol = (symbol: string): SetSymbolAction => ({
  type: SET_SYMBOL,
  payload: symbol,
});
