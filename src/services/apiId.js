import axios from "axios";

const apiId = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/id',
})

export default apiId;