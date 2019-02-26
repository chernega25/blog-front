import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import post from './post'
import postList from "./postList";

const reducers = combineReducers({
    routing: routerReducer,
    post,
    postList
});

export default reducers;