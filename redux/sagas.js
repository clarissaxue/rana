import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { requestLogin, receiveSmsId, requestLogout } from './actions/loginAction';
import { getVerificationNumber } from '../api';

export function* fetchUser(action) {
    try {
        //call SMS api to fetch verificationKey
        const result = yield call(getVerificationNumber, action.phoneNumber);
        //Dispatches received SMS key action to the reducer
        yield put(receiveSmsId(result.data.verificationId));
    } catch (e) {
        
    }
}

export function* loginSaga() {
    //Listens to the latest redux action and performs fetchUser callback function.
    yield takeLatest("REQUEST_LOGIN_USER", fetchUser);
}