import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import HomePage from './components/Home';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import './App.css'

function App(){
    return (
        <div className='app-container'>
          <NavigationBar />
          <Routes>
              <Route path='/home/' element={<HomePage />} />
              <Route 
                path='/characters'
                element={<BrowseCharacters />} />
              <Route 
                path='/characters/:id' 
                element={<CharacterDetails />} />
              <Route path='/comics' element={<Comics />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
    )
}

export default App;