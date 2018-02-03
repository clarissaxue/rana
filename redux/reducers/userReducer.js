export default userReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOG_IN_ACCOUNT":
            if (action.user.exists) {
                return {
                    data: action.user.data,
                    exists: true
                };
            } else {
                return {
                    ...state,
                    exists: false
                };
            }
        case 'REQUEST_LOGOUT_USER':
            return {};
        default:
            return state;
    }
}