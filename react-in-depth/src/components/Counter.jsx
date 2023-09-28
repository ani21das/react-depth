import React, { useState } from 'react';

function Counter () {

    const [ number, setNumber ] = useState( 0 );

    function handleClickIncrease ( e ) {
        e.stopPropagation();
        if ( number < 20 )
        {
            setNumber( number => number + 1 );
        }
    }

    function handleClickDecrease ( e ) {
        e.stopPropagation();
        if ( number > 0 )
        {
            setNumber( number => number - 1 );
        }
    }

    return (
        <>
            <h1>{ number }</h1>
            <button onClick={ handleClickIncrease }>Increase</button>
            <br />
            <br />
            <button onClick={ handleClickDecrease }>Decrease</button>
        </>
    );
};

export default Counter;