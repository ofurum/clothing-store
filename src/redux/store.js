import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger]

const store = createStore(
    reducers, 
    composeWithDevTools(applyMiddleware(...middleware)),

)

export default store;