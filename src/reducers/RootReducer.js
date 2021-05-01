import { combineReducers } from 'redux'
import AlbumListByNameReducer from './AlbumByNameReducer'
import DetailsAlbumReducer from './DetailsAlbumReducer'
import SongReducer from './SongsReducer'


// reducer that contain all reducers

const RootReducer = combineReducers({
    AlbumListByName: AlbumListByNameReducer,
    Songs: SongReducer,
    DetailsAlbum: DetailsAlbumReducer,
})

export default RootReducer