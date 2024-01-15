import "./App.css";
import {HashRouter, Routes, Route} from "react-router-dom";

import Home from "./containers/home/home.js";
import About from "./containers/about/about.js";


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
      </Routes>
        
      
      </HashRouter>
      
      
    </div>
  );
}

export default App;
