import api from './axios'
export const getRecipes = () => {
    return api.get('/recipes/')
}