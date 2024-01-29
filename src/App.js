import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./containers/home/home.js";
import About from "./containers/about/about.js";
import Contact from "./containers/contact/contact.js";
import Services from "./containers/services/services.js";
import Loading from "./components/loading/loading.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
