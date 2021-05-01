const DefaultState = {
    loading: false,
    data: [],
    errorMessage: ""
}

// Reducer for album details after click

const DetailsAlbumReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "ALBUM_DETAILS_LOADING": {
            return {
                ...state,
                loading: true,
                errorMessage: '',
            }
        }
        case "ALBUM_DETAILS_SUCCESS": {
            return {
                ...state,
                loading: true,
                data: action.payload,
                errorMessage: '',
                
            }
        }
        case "ALBUM_DETAILS_FAILED": {
            return {
                ...state,
                loading: false,
                errorMessage: "Nie możemy znaleźć szczegółów albumu"
            }
        }
        default:
            return state
    }
}

export default DetailsAlbumReducer