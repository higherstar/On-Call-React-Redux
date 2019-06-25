import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import {
  getFirstListSuccess,
  getFirstListFailed
} from "./actions";

import {
  GET_FIRST_LIST_REQUEST
} from "../constants";
import {getDataAsync} from "../api";

function* getFirstList() {
  try {
    console.log("***************");
    const firstList = yield call(getDataAsync, 'http://demo0178584.mockable.io/second_dropdown?first=%3Cfirst_dropdown_selected_value%3E');
    if (firstList) {
      yield put(getFirstListSuccess(firstList));
    } else {
      yield put(getFirstListFailed());
    }
  } catch (error) {
    console.log('loading error : ', error);
  }
}

export function* watchGetFirstList() {
  yield takeEvery(GET_FIRST_LIST_REQUEST, getFirstList);
}

export default function* commonSaga() {
  yield all([
    fork(watchGetFirstList)
  ]);
}