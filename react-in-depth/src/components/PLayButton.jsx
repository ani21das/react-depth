import React from 'react'
import './PlayButton.css'
function PlayButton ( {children,onPlay,onPause } ) {
    let playing = false; // dont use this
    function handleCLick ( e ) {
        console.log(e)
        e.stopPropagation();
        if ( playing ) onPause();
        else onPlay()
        playing = !playing
    }
    return (
        <button onClick={ handleCLick }>{ children } : { playing ? '>' : '||' } </button>
  )
}

export default PlayButton