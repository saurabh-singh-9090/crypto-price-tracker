import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';
import dataReducer from '../reducers/dataReducer.ts';
import watchFetchData from '../sagas/dataSaga.ts';
import { loadState, saveState } from '../utils/localStorage.ts';

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(sagaMiddleware)
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

sagaMiddleware.run(watchFetchData);

export default store;
