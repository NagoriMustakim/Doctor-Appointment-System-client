import axios from 'axios'
// axios.defaults.baseURL = process.env.REACT_APP_DEV_SERVER;

/** register user function */
export async function register(values) {
    try {
        const data = await axios.post('http://localhost:4000/api/v1/user/register', values)
        return data
    } catch (error) {
        return error
    }

}