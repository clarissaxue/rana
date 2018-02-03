import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { receiveSmsId, emailTaken } from './actions/loginAction';
import { createNewAccount, logInAccount } from './actions/userActions';
import { getVerificationNumber, getUserData, createAccount, checkExistingAccount } from '../api';

/**
* Calls API to generate verification key
* @param {*action's arguments from action call} action 
*/
function* fetchVerificationKey(action) {
    try {
        //call SMS api to fetch verificationKey
        const result = yield call(getVerificationNumber, action.phoneNumber);
        //Dispatches received SMS key action to the reducer
        yield put(receiveSmsId(result.data.verificationId));
    } catch (e) {

    }
}

/**
* Calls API to check to see
* @param {*action's arguments from action call} action 
*/
function* fetchUser(action) {
    try {
        //api call to get user data associated with the phone number
        const result = yield call(getUserData, action.phoneNumber);
        let user;
        if (result.data[0]) {   //user exists
            user = {
                data: result.data[0],
                exists: true
            };
            yield put(logInAccount(user));  //action call to put data in redux store
        } else {    //user doesn't exist
            user = {
                exists: false
            };
            yield put(createNewAccount(user));  //action call to create a new account with user data and store it in redux
            //redirect to home page
            action.navigator.push({ 
                screen: "CreateAccountNameScreen",
                passProps: {
                    phoneNumber: action.phoneNumber
                }
            });
        }
    } catch (e) {

    }
}

/**
* Calls API to check to see if there is an existing account and to create an account
* @param {*action's arguments from action call} action 
*/
function* createAccountSaga(action) {
    try {
        const response = yield call(checkExistingAccount, action.userData.email);   //api call to check existing account
        if (response.data[0]) { //if email taken exists
            yield put(emailTaken());
        } else {    //else api create account call
            const result = yield call(createAccount, action.userData);
            //success on account creation
            if (result.data == "OK") {
                let user = {
                    data: action.userData,
                    exists: true

                };
                //stores user data in redux
                yield put(logInAccount(user));
            }
        }
    }
    catch (e) {

    }
}

//Saga that listen to specific login actions
export function* loginSaga() {
    //Listens to the latest redux action and performs callback function.
    yield takeLatest("REQUEST_LOGIN_USER", fetchVerificationKey);
    yield takeLatest("USER_VERIFY", fetchUser);
    yield takeLatest("CREATE_ACCOUNT", createAccountSaga);
}