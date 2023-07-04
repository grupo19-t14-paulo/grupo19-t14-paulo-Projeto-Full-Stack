import axios from "axios"

const api = axios.create({
    baseURL: "https://grupo19-t14-paulo-projeto-full-stack.onrender.com",
    timeout: 5000
})

export { api }