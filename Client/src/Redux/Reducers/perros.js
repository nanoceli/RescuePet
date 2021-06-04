const InitialState = {
    perros: []
};

export const perros = (state = InitialState, action) => {
    switch (action.type) {
        case 'PUBLICAR_PERROS':
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}