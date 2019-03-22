import {
    FETCH_ABOUT
} from '../actions/actionTypes'

const initialState = {};

export default function about(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_ABOUT:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}