import {
    SET_MESSAGE,
    CLEAR_MESSAGE
} from './type';

export const setMessage = (m) =>({
    type: SET_MESSAGE,
    payload: m
});

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
});