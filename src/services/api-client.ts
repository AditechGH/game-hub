import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fa1b435724a84452a5a97f2f1bb523a2'
    }
})