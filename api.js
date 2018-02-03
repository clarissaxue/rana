import axios from 'axios';

/**
 * AJAX call to get randomly generated verfication code
 @param {* send code to the phone number} phoneNumber
 */
export const getVerificationNumber = (phoneNumber) => {
    return axios.post("http://localhost:3000/api/verifyPhoneNumber", { phoneNumber: phoneNumber });
}

/**
 * AJAX call to get user data with provided phone number
 @param {* send user data from database } phoneNumber
 */
export const getUserData = (phoneNumber) => {
    return axios.get("http://localhost:3000/api/getUserData?phoneNumber=" + encodeURIComponent(phoneNumber));
}

/**
 * AJAX call to create an account with provided data
 @param {* store user data in database } userData
 */
export const createAccount = (userData) => {
    return axios.put("http://localhost:3000/api/createAccount", { data: userData });
}

/**
 * AJAX call to check if account exists
 @param {* email in database } email
 */
export const checkExistingAccount = (email) => {
    return axios.get("http://localhost:3000/api/checkExistingAccount?email=" + email);
}