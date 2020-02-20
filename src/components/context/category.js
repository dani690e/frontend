import axios from "axios";

const baseURL = 'http://localhost:4000/kategorier'

export async function getAllCategories() {
    const response = await axios.get(baseURL);
    return response.data;
}

export async function getCategoryById(categoryId) {
    const response = await axios.get(`${baseURL}/${categoryId}`);
    return response.data;
}