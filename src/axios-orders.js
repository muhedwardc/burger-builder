import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-app-burgerbuilder.firebaseio.com/'
});

export default instance;