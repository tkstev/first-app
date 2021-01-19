import React from 'react';
import './App.css';
import image from './Components/Images/Bitmoji.png'

function App() {
  return (
    <div className="App">
      <h1 className="Title">Ms. Stevens</h1>
      <h2 className= "Subtitle">Artist and Art Teacher</h2>
      <img src = {image} alt= "Selfie" ></img>
      <h1 className="School">FDNY High School</h1>
      <p className="Content">About Me</p>
      <p>Stuff that I've done or will do</p>
    </div>
     
  );
}

export default App;
