import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-games-agkt.onrender.com/api'
});

export const getReviews = () => {
    return api
        .get('/reviews')
        .then(({data}) => data.reviews)
}