import React, { useState } from 'react'
import './PlayButton.css'
function PlayButton ( {children,onPlay,onPause } ) {
    let [playing, setPlaying] = useState(false)
    function handleCLick ( e ) {
        console.log(e)
        e.stopPropagation();
        if ( playing ) onPause();
        else onPlay()

        setPlaying( !playing );
     }
    
    return (
        <button onClick={ handleCLick }>{ children } : { playing ? '>' : '||' } </button>
  )
}

export default PlayButton