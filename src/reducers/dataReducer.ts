import { Reducer } from 'redux';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, DataActions } from '../actions/dataActions';

interface DataState {
  data: any[];
  error: string | null;
}

const initialState: DataState = {
  data: [],
  error: null,
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
    default:
      return state;
  }
};

export default dataReducer;
