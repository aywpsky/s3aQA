import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-ba850.firebaseio.com/'
})

export default instance;