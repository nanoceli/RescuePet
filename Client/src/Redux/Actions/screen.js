const CAMBIAR_SCREEN = 'CAMBIAR_SCREEN'

export const cambiarScreen = (screen) => {
    return (dispatch) => {
        dispatch({ type: CAMBIAR_SCREEN, payload: screen })
    }
};