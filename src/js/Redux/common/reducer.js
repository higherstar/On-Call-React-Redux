import {
  GET_FIRST_LIST_REQUEST,
  GET_FIRST_LIST_SUCCESS,
  GET_FIRST_LIST_FAILED
} from "../constants";

const INIT_STATE = {
  isLoading: false,
  firstList: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_FIRST_LIST_REQUEST:
      return {...state, isLoading: true};
    case GET_FIRST_LIST_SUCCESS:
      return {...state, firstList: action.payload, isLoading: false};
    case GET_FIRST_LIST_FAILED:
      return {...state, isLoading: false};

    default:
      return {...state};
  }
};
