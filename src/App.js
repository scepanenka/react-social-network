import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-content-wrapper'>
          <Route path='/dialogs'
                 render={ () => <DialogsContainer store={props.store} />}/>
          <Route path='/profile' render = {
            () => <Profile store={props.store}
                           dispatch={props.dispatch}/>}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>)
}

export default App;
