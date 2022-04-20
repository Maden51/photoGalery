import axios from "axios";

export function requestGetPhotos() {
    return axios.request({
        method: 'get',
        url : 'https://jsonplaceholder.typicode.com/photos?_start=0&_end=24'
    });
}