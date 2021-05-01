const DefaultState = {
    loading: false,
    data: {},
    errorMessage: '',
}

// Reducer for get list of songs from certain album

const SongReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "SONGS_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMessage: '',
            }
         case "SONGS_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMessage: '',
                data: {
                    ...state.data,
                    [action.collectionId]: action.payload,
                }
            }
         case "SONGS_LIST_FAILED":
            return {
                ...state,
                loading: false,
                errorMessage: 'nie można znaleźć piosenek z albumu',
            }
            
        default:
            return state
    }
}

export default SongReducer