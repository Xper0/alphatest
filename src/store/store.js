import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk"
import { logger } from  "redux-logger"


import rootReducers from "./modules"


export const configureStore = (reducers ={}, preloadedState ={}, middlewares = []) => createStore(
    combineReducers({
        ...rootReducers,
        ...reducers
    }),
    preloadedState,
    compose(
        applyMiddleware(
            ...middlewares,
            thunk,
            logger

        ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
)

