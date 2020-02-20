import axios from "axios";

const baseURL = 'http://localhost:4000/images/upload'

export async function uploadFile(data) {
    axios.post(baseURL, data)
}