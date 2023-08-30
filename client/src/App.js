import React, { useEffect, useState } from 'react'


function App() {

  // initialized as an empty array
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    // we can just use the relative path instead of localhost:5000 bcs we have defined in proxy
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        // when data is received from server, it will be store in backend data state
        setBackendData(data)
      }
    )

  }, [])  //empty array so it only runs on first render of component

  return (
    <div>App</div>
  )
}

export default App

