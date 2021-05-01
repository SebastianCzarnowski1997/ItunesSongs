const DefaultState = {
    loading: false,
    data: [],
    errorMessage: ""
}

// Reducer that allow to  find all the albums that match certain album or artist

const AlbumListByNameReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "ALBUM_LIST_BY_NAME_LOADING": {
            return {
                ...state,
                loading: true,
                errorMessage: '',
            }
        }
        case "ALBUM_LIST_BY_NAME_SUCCESS": {
            return {
                ...state,
                loading: true,
                data: action.payload,
                errorMessage: '',
                
            }
        }
        case "ALBUM_LIST_BY_NAME_FAILED": {
            return {
                ...state,
                loading: false,
                errorMessage: "Nie możemy znaleźć albumu"
            }
        }
        default:
            return state
    }
}

export default AlbumListByNameReducer