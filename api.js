import axios from 'axios';

export const getVerificationNumber = (phoneNumber) => {
    return axios.post("http://localhost:3000/api/verifyPhoneNumber", { phoneNumber: phoneNumber });
}