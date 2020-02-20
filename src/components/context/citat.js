import axios from "axios";

const baseURL = 'http://localhost:4000/citater'

export async function getAllCitater() {
    const response = await axios.get(baseURL);
    return response.data;
}

export async function getCitatById(id) {
    const response = await axios.get(baseURL + "/" + id);
    return response.data;
}

export async function editCitat(citat_id, citat) {
    const response = await axios.patch(`${baseURL}/${citat_id}`, citat)
    return response.data;
}

export async function deleteCitatById(id) {
    const response = await axios.delete(`${baseURL}/${id}`)
    return response.data
}

export async function createCitat(citat) {
    axios.post(baseURL, citat)
}

export async function getCitatByKad(katId) {
    const response = await axios.get(`${baseURL}/getbykat/${katId}`)
    return response.data
}