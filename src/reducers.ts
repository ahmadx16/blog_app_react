const initialState:any[] = []

export const blogReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case 'ADD_BLOG':
            return [
                action.payload, ...state
            ]
        default:
            return state
    }
}
