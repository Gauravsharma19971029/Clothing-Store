import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './root-reducer'
import {fetchCollectionsStart} from './shop/shop.sagas'
import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware]
if(process.env.NODE_ENV === 'development')
{
    // eslint-disable-next-line no-const-assign
    middlewares.push(logger);
}


const store = createStore(rootReducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store)

export  {store,persistor};