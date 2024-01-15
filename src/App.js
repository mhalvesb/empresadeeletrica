import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./containers/home/home.js";
import About from "./containers/about/about.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/about" element={<About/>}></Route>
      </Routes>
        
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
