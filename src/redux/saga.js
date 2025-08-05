import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from './actions';

function* fetchUserSaga(action) {
  try {
    const response = yield call(axios.get, `https://api.github.com/users/${action.payload}`);
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserSaga);
}


// import { call, put, takeLatest, all } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   FETCH_USER_REQUEST,
//   FETCH_REPOS_REQUEST,
//   FETCH_FOLLOWERS_REQUEST,
//   fetchUserSuccess,
//   fetchReposSuccess,
//   fetchFollowersSuccess,
//   fetchUserFailure,
//   fetchReposFailure,
//   fetchFollowersFailure
// } from './actions';

// function* fetchUserSaga(action) {
//   try {
//     const response = yield call(axios.get, `https://api.github.com/users/${action.payload}`);
//     yield put(fetchUserSuccess(response.data));
//   } catch (error) {
//     yield put(fetchUserFailure(error.message));
//   }
// }

// function* fetchReposSaga(action) {
//   try {
//     const response = yield call(axios.get, `https://api.github.com/users/${action.payload}/repos`);
//     yield put(fetchReposSuccess(response.data));
//   } catch (error) {
//     yield put(fetchReposFailure(error.message));
//   }
// }

// function* fetchFollowersSaga(action) {
//   try {
//     const response = yield call(axios.get, `https://api.github.com/users/${action.payload}/followers`);
//     yield put(fetchFollowersSuccess(response.data));
//   } catch (error) {
//     yield put(fetchFollowersFailure(error.message));
//   }
// }

// export default function* rootSaga() {
//   yield all([
//     takeLatest(FETCH_USER_REQUEST, fetchUserSaga),
//     takeLatest(FETCH_REPOS_REQUEST, fetchReposSaga),
//     takeLatest(FETCH_FOLLOWERS_REQUEST, fetchFollowersSaga)
//   ]);
// }

