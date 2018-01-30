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
 * Action to send userData to reducer
 * @param {*user profile data} userData 
 */
export const receiveLogin = (userData) => {
    return {
        type: "RECEIVE_LOGIN_USER",
        //temporary phoneNumber prop
        phoneNumber: userData
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