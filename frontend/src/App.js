import React from 'react';
import { useEffect } from 'react'

function App() {


  useEffect(() => {
    fetch('/health')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  useEffect(() => {
    fetch('/api/v1/product')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  return (
    <div>
      ok
    </div>
  );
}

export default App;
