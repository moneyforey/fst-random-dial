import {applyMiddleware, combineReducers,legacy_createStore} from 'redux';
import thunk from'redux-thunk'
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
    user:userReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
