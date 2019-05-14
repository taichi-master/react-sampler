import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '@models/reducers'
import rootSaga from '@models/sagas'

// const sagaMiddleware = createSagaMiddleware()
      // store = createStore( reducers, window.__INITIAL_STATE__, applyMiddleware( sagaMiddleware ) )

// export default store
export default initState => {
  const sagaMiddleware = createSagaMiddleware(),
        store = createStore( reducers, initState, applyMiddleware( sagaMiddleware ) )

  sagaMiddleware.run( rootSaga )
  return store
}
