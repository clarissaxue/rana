import { Navigation } from "react-native-navigation";
/**
 * Action to request user login
 * @param {*p phone number} phoneNumber 
 */
export const requestLogin = (number) => {
    return {
        type: "REQUEST_LOGIN_USER",
        phoneNumber: number
    }
};

/**
 * Action to send SMS verificationID to reducer
 * @param {*generated SMS key} verificationId 
 */
export const receiveSmsId = (verificationId) => {
    return {
        type: "RECEIVE_SMS_ID",
        //temporary phoneNumber prop
        verificationId: verificationId
    }
};

/**
 * Action to log out user
 */
export const requestLogout = () => {
    return {
        type: "REQUEST_LOGOUT_USER"
    }
}


export const verifyLogin = (status) => {
    return {
        type: "USER_VERIFY",
        verified: status
    }
}