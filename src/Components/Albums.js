import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetSongs } from '../Actions/albumActions';
import { GetDetailsAboutAlbum } from '../Actions/albumActions';
import _ from 'lodash';
import "../albums.css"


const Album = (props) => {
    const currentCollectionId = props.match.params.collectionId;   // find matching params from Link
    const dispatch = useDispatch();
    const songState = useSelector(state => state.Songs); // all songs from certain album
    const albumDetails = useSelector(stat => stat.DetailsAlbum); // album details

    // fetching data using dispatch and pass collectionID to get data of certain album

    React.useEffect(() => {
        dispatch(GetSongs(currentCollectionId));
        dispatch(GetDetailsAboutAlbum(currentCollectionId));
    }, [currentCollectionId])

    // function that return data 

    const showData = () => {
        if (!_.isEmpty(songState.data[currentCollectionId])) {
            // assign all songs to variable
            const songsData = songState.data[currentCollectionId].results
            // assign all details to variable
            const albumDetailsArray = albumDetails.data[0];
            return <div className="mainContainer">
                <div className="songContainer">
                    <div className="albumDetails">
                        <h3>Szczególy albumu:</h3>
                        <p>Artysta/Zespół: {albumDetailsArray.artistName}</p>
                        <p>Nazwa albumu: {albumDetailsArray.collectionName}</p>
                        <p>Cena albumu: {albumDetailsArray.collectionPrice} $</p>
                        <p>Kraj: {albumDetailsArray.country}</p>
                        <p>Data wydania albumu: {albumDetailsArray.releaseDate}</p>
                        <p>Typ: {albumDetailsArray.collectionType}</p>
                        <p>Lista utworów {albumDetailsArray.trackCount}</p>
                </div>
                    <div className="songsFromAlbum">
                        <h3>Lista utworów:</h3>
                        {songsData.map((el) => {
                            return (
                                <p className="opacity">{el.trackName}</p>
                        )
                     })}
                </div>
            </div>
            </div>
        }
        if (songState.loading) {
            return <p>Loading...</p>
        }
        return <p>Error</p>
    }
// showing the data on the screen
    return (
        <div>
            {showData()}
        </div>
    )
}

export default Album