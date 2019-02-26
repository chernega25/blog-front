import {
    FETCH_POST
} from '../actions/actionTypes'

const initialState = {};

export default function post(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_POST:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
}