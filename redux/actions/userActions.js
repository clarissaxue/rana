/**
* Action to dipatch user data to redux store for existing user
* @param {* user data} user 
*/
export const logInAccount = (user) => {
    return {
        type: "LOG_IN_ACCOUNT",
        user: user
    }
}

/**
* Action to dipatch user data to redux store for a new user
* @param {* user data} user 
*/
export const createNewAccount = (user) => {
    return {
        type: "LOG_IN_ACCOUNT",
        user: user
    }
}