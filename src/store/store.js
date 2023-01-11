import {compose,legacy_createStore as createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [logger];

const compoedEnhancers = compose(applyMiddleware(...middleWares));
//root-reducer

export const store = createStore(rootReducer,undefined,compoedEnhancers);