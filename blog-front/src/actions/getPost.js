import {
    FETCH_ERROR,
    FETCH_POST
} from "./actionTypes";
import {postList} from "../utils/constants";


export const getPost = postId => async dispatch => {
    const post = postList.find(x => x.id === postId);
    if (typeof post === 'undefined') {
        dispatch({
            type: FETCH_ERROR,
            payload: 'Нет такого поста',
            error: true
        });
    } else {
        dispatch({
            type: FETCH_POST,
            payload: post
        });
    }
};