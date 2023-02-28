import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cert from "./Pages/Cert";
import Add from "./Pages/Add";

function App() {

    

    return (
        <Router>
        <Routes>
          <Route path='/' element={<Cert/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      </Router>
    );
}
  
  export default App