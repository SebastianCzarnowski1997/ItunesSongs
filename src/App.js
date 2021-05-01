import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
import AlbumListByName from './Components/AlbumListByName';
import Album from './Components/Albums';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Wróć do wyszkiwania</NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={AlbumListByName}/>
        <Route path={'/album/:collectionId'} exact component={Album} />
        <Redirect to={'/'}/>
      </Switch>
    </div>
  );
}

export default App;
