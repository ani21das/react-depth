import React from 'react'

function Hobbies ( { hobbies } ) {
    return (
        <div className='mb-4'>
            <h2>Hobbies</h2>
            <ol>
                { hobbies.map( ( hobby, index ) => (
                    <li key={ index }>{ hobby }</li>
                ))}
            </ol>
        </div>
    );
}

export default Hobbies