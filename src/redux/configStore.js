import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { QLNDReducer } from './reducers/QLNDReducer';

const rootReducer = combineReducers({
    QLNDReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;