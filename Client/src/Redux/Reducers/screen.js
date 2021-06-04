const InitialState = {
    screen: "Inicio"
};

export const screenReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'CAMBIAR_SCREEN':
            return {
                screen: action.payload
            };
        default:
            return state;
    }
}