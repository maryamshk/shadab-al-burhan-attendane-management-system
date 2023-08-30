import React, { useEffect, useState } from 'react'
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </Router>



    // // initialized as an empty array
    // const [backendData, setBackendData] = useState([{}])

    // useEffect(() => {
    //   // we can just use the relative path instead of localhost:5000 bcs we have defined in proxy
    //   fetch("/api").then(
    //     response => response.json()
    //   ).then(
    //     data => {
    //       // when data is received from server, it will be store in backend data state
    //       setBackendData(data)
    //     }
    //   )

    // }, [])  //empty array so it only runs on first render of component

  );
}

export default App

