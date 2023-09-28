import React, { useState, useEffect } from 'react';
// import './App.css';

function Clock () {

  const [ time, setTime ] = useState( new Date() );

  useEffect( () => {
    const newTime = new Date();
    setTime( newTime );
    if ( newTime.getSeconds() === 0 )
    {
      console.log( 'End of the minute' );
    }
  }, [ time ] );

  // Format the time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString( [], { hour: '2-digit', minute: '2-digit', second: '2-digit' } );

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">{ formattedTime }</h1>
        </div>
      </div>
    </div>
  );
}

function App () {
  return (
    <div className="App">
      <Clock />
    </div>
  );
}

export default App;
