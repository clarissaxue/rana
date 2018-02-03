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
        case 'REQUEST_LOGOUT_USER':
            return {
                navigate: "login"
            };
        case 'LOG_IN_ACCOUNT':
            return {
                ...state,
                navigate: "home"
            };
        case 'EMAIL_TAKEN':
            return {
                ...state,
                emailTaken: true,
                navigate: null
            };
        default:
            return state;
    }
}