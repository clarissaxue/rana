import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { requestLogin, receiveLogin, requestLogout } from './actions/loginAction';


export function* fetchUser(action) {
    //call some api to fetch data
    //const user = yield call(API.getUserData, action);
    const user = action.phoneNumber;

    //Dispatches receive login action to the reducer
    yield put(receiveLogin(user));
}

export function* loginSaga() {
    //Listens to the latest redux action and performs fetchUser callback function.
    yield takeLatest("REQUEST_LOGIN_USER", fetchUser);
}