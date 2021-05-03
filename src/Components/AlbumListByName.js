import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  '../AlbumListByName.css'
import _ from 'lodash';
import { GetAlbumListByName } from '../Actions/albumActions';
import { Link } from 'react-router-dom';


const AlbumListByName = () => {
    const [searchNames, setSearchNames] = useState("")
    const [searchNamesAfterClick, setSearchNamesAfterClick] = useState("")
    const dispatch = useDispatch();
    const albumList = useSelector(state => state.AlbumListByName); // albums meeting the criteria

    // fetching data to get all the albums that match what user types
 
    React.useEffect(() => {
        FetchData()
    }, [searchNamesAfterClick])
    
    const FetchData = () => {
        dispatch(GetAlbumListByName(searchNamesAfterClick))
    }

    // conditions about fetching data 

    const showData = () => {
        // checking if value is empty object
        if (!_.isEmpty(albumList.data)) {
            return (
                <div className="container">
                    <div className="inputContainer">
                        <input type="text" placeholder="Wpisz artystę lub album" onChange={(e) => setSearchNames(e.target.value)}/>
                        <button onClick={() => setSearchNamesAfterClick(searchNames)}>Wyszukaj</button>
                    </div>
                    <div className="album">
              {albumList.data.results.map(el => {
                return <div className="albumContainer">
                    <h3>{el.artistName}</h3>
                    <p>Album:</p>
                    <p>{el.collectionName}</p>
                    <Link className="link" to={`/album/${el.collectionId}`}> Zobacz więcej </Link>  
                </div>
              })}
                </div>
                </div>
            )
        }
        // if loading
        if (albumList.loading) {
            return <p>Loading...</p>
        }

        // if we have problem with data
         if (albumList.errorMessage !== '') {
            return <p>{albumList.errorMessage}</p>
        }

        return <p>unable to get data</p>
    }

    // start an action
    
    return (
        <div>{showData()}</div>
    )
}

export default AlbumListByName