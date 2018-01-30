export default function userReducer(state = [], action) {
    switch (action.type) {
        case 'REQUEST_LOGIN_USER':
            console.log(action.type);
            return state;
        case 'RECEIVE_LOGIN_USER':
            console.log(action.type);
            return [...state, Object.assign({}, { phoneNumber: action.phoneNumber })];

        case 'REQUEST_LOGOUT_USER':
            return state = [];
        default:
            return state;
    }
}