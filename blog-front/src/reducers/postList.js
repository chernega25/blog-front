import {
    FETCH_POST_LIST
} from '../actions/actionTypes'

const initialState = {};

export default function postList(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_POST_LIST:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}