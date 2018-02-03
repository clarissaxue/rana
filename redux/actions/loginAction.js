/**
 * Action to request user login
 * @param {*p phone number} phoneNumber 
 */
export const requestLogin = (number) => {
    return {
        type: "REQUEST_LOGIN_USER",
        phoneNumber: number
    };
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
    };
};

/**
 * Action to log out user
 */
export const requestLogout = () => {
    return {
        type: "REQUEST_LOGOUT_USER"
    };
}


/**
 * Action to dispatch a sms request to the saga
 * @param {* Dispatch phone number and the navigator if phone number is not taken} phoneNumber, navigator
 */
export const verifyLogin = (phoneNumber, navigator) => {
    return {
        type: "USER_VERIFY",
        phoneNumber: phoneNumber,
        navigator: navigator
    };
}

/**
 * Action to dispatch creating an account
  * @param {* Dispatch userData to saga} userData
 */
export const createAccountAction = (userData) => {
    return {
        type: "CREATE_ACCOUNT",
        userData
    };
}

/**
 * Action to dispatch the email already exists
 */
export const emailTaken = () => {
    return {
        type: "EMAIL_TAKEN"
    }
}