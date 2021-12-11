import React from 'react'
import './App.css';
// Import and use the Gallery function component in App.js.
import Gallery from "./photoGrid"


function App() {
  return (
    <div className="App">
        <div className="container">
          <h1 className="title">React photoGrid</h1>
            <Gallery />
      </div>
    </div>
  );
}

export default App;
