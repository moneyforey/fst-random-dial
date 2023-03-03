import {applyMiddleware, combineReducers,compose,legacy_createStore} from 'redux';
import thunk from'redux-thunk'
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user:userReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
