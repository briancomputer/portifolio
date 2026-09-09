import Axios from "axios";

const api = Axios.create({
    baseURL: 'https://nixxexe.github.io/Banco-de-dadoss/'

})

export default api;