import React, { useEffect, useState } from 'react';
import "./App.css";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [loginData, setLoginData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/login")
      // .then(response => console.log(response.json)
      // )
      .then(response => response.json())
      .then(data => {
        setLoginData(data);
      })
      .catch(err => {
        console.error("Error fetching login data:", err);
      });


      // .then(response => {
      //   console.log(response); // Log the response
      //   return response;
      // })
      // .then(data => {
      //   setLoginData(data);
      // })
      // .catch(err => {
      //   console.error("Error fetching login data:", err);
      // });



  }, []);


  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
        </Routes>
      </Router>

 */}

      {/* <div>
        <h1>Data from Backend</h1>
        <pre>{JSON.stringify(loginData, null, 2)}</pre>
      </div> */}

    </>
  );
}

export default App;