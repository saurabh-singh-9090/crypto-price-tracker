import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataReducer from '../reducers/dataReducer.ts';
import watchFetchData from '../sagas/dataSaga.ts';

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchData);

export default store;
