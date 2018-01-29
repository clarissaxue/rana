/**
 * Action to request user login
 * @param {*login information} userLoginInfo 
 */
export const requestLogin = (userLoginInfo) => {
    return {
        type: "REQUEST_LOGIN_USER",
        user: userLoginInfo
    }
};

/**
 * Action to send userData to reducer
 * @param {*user profile data} userData 
 */
export const receiveLogin = (userData) => {
    return {
        type: "RECEIVE_LOGIN_USER",
        user: userData
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