import {
    FETCH_POST_ID
} from "./actionTypes";
import {createPost} from "../utils/constants";

export const newPost = post => async dispatch => {
    const id = createPost(post);
    dispatch({
        type: FETCH_POST_ID,
        payload: id
    });
    return id;
};