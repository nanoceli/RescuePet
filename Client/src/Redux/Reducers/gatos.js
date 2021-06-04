const InitialState = {
    gatos: []
};

export const gatos = (state = InitialState, action) => {
    switch (action.type) {
        case 'PUBLICAR_GATO':
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
}