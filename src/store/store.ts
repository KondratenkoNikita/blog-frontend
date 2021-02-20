import {
  createStore, PreloadedState, Store, applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducers from 'store/reducers';
import unionSagas from 'store/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState?: PreloadedState<Record<string, unknown>>): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(
    createReducers,
    preloadedState,
    composedEnhancers,
  );
  sagaMiddleware.run(unionSagas);

  return store;
};

export default configureStore;
