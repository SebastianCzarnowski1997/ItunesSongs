import axios from 'axios'

// Fetching data to get all albums by name or album

export const GetAlbumListByName = (artist) => async dispatch => {
    try {
        dispatch({
            type: "ALBUM_LIST_BY_NAME_LOADING"
        })
        const res = await axios.get(`https://itunes.apple.com/search?term=${artist}&entity=album`)
        
        dispatch({
            type: "ALBUM_LIST_BY_NAME_SUCCESS",
            payload: res.data,
        })
    } catch (e) {
        dispatch({
            type: "ALBUM_LIST_BY_NAME_FAILED"
        })
        }

}

// Fetching data to get list of songs by collectonID

export const GetSongs = (collectionId) => async dispatch => {
      try {
        dispatch({
            type: "SONGS_LIST_LOADING"
        })
        const res = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&entity=song`)
        
        dispatch({
            type: "SONGS_LIST_SUCCESS",
            payload: res.data,
            collectionId: collectionId,
        })
    } catch (e) {
        dispatch({
            type: "SONGS_LIST_FAILED"
        })
        }
}

// Fetching data to get all the details about the album after click

export const GetDetailsAboutAlbum = (collectionId) => async dispatch => {
      try {
        dispatch({
            type: "ALBUM_DETAILS_LOADING"
        })
        const res = await axios.get(`https://itunes.apple.com/lookup?id=${collectionId}&entity=album`)
        
        dispatch({
            type: "ALBUM_DETAILS_SUCCESS",
            payload: res.data.results,
            collectionId: collectionId,
        })
    } catch (e) {
        dispatch({
            type: "ALBUM_DETAILS_FAILED"
        })
        }
}