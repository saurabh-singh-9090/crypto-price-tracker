import { Reducer } from 'redux';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, SET_SYMBOL, DataActions } from '../actions/dataActions.ts';

interface DataState {
  data: any[];
  error: string | null;
  symbol: string;
}

const initialState: DataState = {
  data: [],
  error: null,
  symbol: 'bitcoin',
};

const dataReducer: Reducer<DataState, DataActions> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_SYMBOL:
      return {
        ...state,
        symbol: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
