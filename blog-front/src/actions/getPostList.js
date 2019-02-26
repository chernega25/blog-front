import {
    FETCH_POST_LIST
} from "./actionTypes";


export const getPostList = () => async dispatch => {
    dispatch({
        type: FETCH_POST_LIST,
        payload: {
            postList: [
                {
                    postId: '1',
                    postHeader: 'Пост 1',
                    postText: 'Текст какой-то пост 1'
                },
                {
                    postId :'2',
                    postHeader: 'Пост 2',
                    postText: 'Текст какой-то пост 2'
                }
            ]
        }
    });
};