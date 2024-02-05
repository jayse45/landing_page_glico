import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        "Content-Type": "application/json",
    }}
);

const firsttime_register = async (data) => {
    const request = {
        user: data.user,
        beneficiary: data.beneficiary,
        transaction: data.transaction
    }

    try {
        const response = await instance.post("/first_register", request);
        console.log(response)
        if (response.data.success) {
            return true;
        }

        return false;
    } catch (err) {
        console.log(err);
        console.log(request);
    }
}

export default firsttime_register;