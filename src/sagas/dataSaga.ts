import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_REQUEST, fetchDataSuccess, fetchDataFailure, FetchDataRequestAction } from '../actions/dataActions.ts';

function* fetchData(action: FetchDataRequestAction) {
  try {
    const response = yield call(axios.get, `http://localhost:5000/data/crypto/${action.payload}`);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchData);
}

export default watchFetchData;
