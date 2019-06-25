import {
  GET_FIRST_LIST_REQUEST,
  GET_FIRST_LIST_SUCCESS,
  GET_FIRST_LIST_FAILED
} from '../constants';

export const getFirstList = () => ({
  type: GET_FIRST_LIST_REQUEST
});

export const getFirstListSuccess = (payload) => ({
  type: GET_FIRST_LIST_SUCCESS,
  payload
});

export const getFirstListFailed = () => ({
  type: GET_FIRST_LIST_FAILED
});


export const sendDataFrom = () => ({
  type: GET_FIRST_LIST_REQUEST
});

