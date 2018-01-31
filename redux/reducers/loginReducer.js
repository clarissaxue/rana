export default loginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_LOGIN_USER':
            return {
                ...state,
                navigate: null
            };
        case 'RECEIVE_SMS_ID':
            console.log(action.type);
            return {
                verificationId: action.verificationId,
                navigate: null
            };
        case 'USER_VERIFY':
            let navigate = action.verified ? "home" : "login"
            return {
                ...state,
                verified: action.verified,
                navigate: navigate
            };
        case 'REQUEST_LOGOUT_USER':
            return {
                navigate: "login"
            };
        default:
            return state;
    }
}