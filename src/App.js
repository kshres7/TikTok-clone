import React from 'react';
import './App.css';
import Video from "./Video";

function App() {
  return (
    //BEM naming convention
    <div className="App">
      <div className="app__videos">
        <Video />
        <Video />
      </div>
      {/* app container */}
        {/* Videos*/}
        {/* <Videos /> */}
        {/* <Videos /> */}
        {/* <Videos /> */}
        {/* <Videos  /> */}
        {/* <Videos /> */}
    </div>
  );
}

export default App;
