import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'

import rootReducer from './root-reducer'

let middlewares = []
if(process.env.NODE_ENV === 'development')
{
    // eslint-disable-next-line no-const-assign
    middlewares = [logger];
}


const store = createStore(rootReducer,applyMiddleware(...middlewares))
const persistor = persistStore(store)

export  {store,persistor};