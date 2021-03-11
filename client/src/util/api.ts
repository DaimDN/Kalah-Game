import axios from 'axios'

const api : any = axios.create({
    baseURL: 'http://localhost:7000/',
    headers: {
    'Content-Type': 'application/json'
    }

})


export {api};