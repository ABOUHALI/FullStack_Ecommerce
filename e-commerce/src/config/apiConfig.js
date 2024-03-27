import axios from "axios"

export const API_BASEURL="http://localhost:5555"

const jwt = localStorage.getItem("jwt")

export const api=axios.create({
    baseURL:API_BASEURL,
    headers:{
        "Authorization":`Bearer ${jwt}`,
        "Content-Type":"application/json"
    }
})