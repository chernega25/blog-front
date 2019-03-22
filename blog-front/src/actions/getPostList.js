import {
    FETCH_POST_LIST
} from "./actionTypes";
import {postList} from "../utils/constants";


export const getPostList = () => async dispatch => {
    dispatch({
        type: FETCH_POST_LIST,
        payload: {
            postList: postList
        }
    });
};