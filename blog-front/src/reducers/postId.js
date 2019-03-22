import {
    FETCH_POST_ID
} from '../actions/actionTypes'

const initialState = {};

export default function post(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_POST_ID:
            return {
                ...state,
                payload
            };
        default:
            return state;
    }
}