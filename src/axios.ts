import axios from 'axios';


const axiosObj = axios.create({
    baseURL: 'http://127.0.0.1:8000/blogs'
});


export default axiosObj;
