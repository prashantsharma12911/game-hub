import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '688db6a417a94dcaba4ca9fb2288fdc0'
    }
})