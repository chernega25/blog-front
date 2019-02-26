import {
    FETCH_ERROR,
    FETCH_POST
} from "./actionTypes";


export const getPost = postId => async dispatch => {
    switch (postId) {
        case '1':
            dispatch({
                type: FETCH_POST,
                payload: {
                    postId: '1',
                    postHeader: 'Пост 1',
                    postText: 'Текст какой-то пост 1'
                }
            });
            break;
        case '2':
            dispatch({
                type: FETCH_POST,
                payload: {
                    postId :'2',
                    postHeader: 'Пост 2',
                    postText: 'Текст какой-то пост 2'
                }
            });
            break;
        default:
            dispatch({
                type: FETCH_ERROR,
                payload: 'Нет такого поста',
                error: true
            });
    }
};