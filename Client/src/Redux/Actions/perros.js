const axios = require("axios");
const PUBLICAR_PERROS = 'PUBLICAR_PERROS'

export const publicarPerro = () => {
    return async (dispatch) => {
        dispatch({ type: PUBLICAR_PERROS, payload: json })
    }
};