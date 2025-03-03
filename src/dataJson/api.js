import axios from "axios";


const api = axios.create({
    baseURL: "//inertia-pos.manirul.xyz/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
})

export default api;