import React from 'react'
import './PlayButton.css'
function PlayButton ( { message,children } ) {

    function handleCLick () {
        console.log( { message } )
    }
    return (
        <button onClick={ handleCLick }>{ children }</button>
  )
}

export default PlayButton