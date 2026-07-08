import api from './axios.js'
export const getRecipe = (id) => {
    return api.get(`recipes/${id}`)
}