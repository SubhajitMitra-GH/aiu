import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './componets/Home'
import PdfViewer from './componets/PdfViewer';



function App() {
  return (
    <Router>
      <Routes>
        {/* Other routes */}
        <Route path="/" element ={<Home/>}/>
        <Route path="/view" element={<PdfViewer />} />
      </Routes>
    </Router>
  );
}



export default App