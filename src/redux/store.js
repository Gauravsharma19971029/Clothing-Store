import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'

import rootReducer from './root-reducer'

let middlewares = [thunk]
if(process.env.NODE_ENV === 'production')
{
    // eslint-disable-next-line no-const-assign
    middlewares = [logger];
}


const store = createStore(rootReducer,applyMiddleware(...middlewares))
const persistor = persistStore(store)

export  {store,persistor};