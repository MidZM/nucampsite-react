import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites'

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId,
        rating,
        author,
        text
    }
});

export const fetchCampsites = () => dispatch => {
    dispatch(campsitesIsLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesIsLoading = () => ({
    type: ActionTypes/ActionTypes.CAMPSITES_LOADING
});

export const campsitesFailed = errMessage => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMessage
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});