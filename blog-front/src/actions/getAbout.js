import {aboutMe} from "../utils/constants";
import {FETCH_ABOUT} from "./actionTypes";

export const getAbout = () => async dispatch => {
    dispatch({
        type: FETCH_ABOUT,
        payload: aboutMe
    })
};