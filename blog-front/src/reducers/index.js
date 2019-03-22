import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import post from './post'
import postList from "./postList";
import about from "./about";
import postId from "./postId";

const reducers = combineReducers({
    routing: routerReducer,
    post,
    postId,
    postList,
    about
});

export default reducers;