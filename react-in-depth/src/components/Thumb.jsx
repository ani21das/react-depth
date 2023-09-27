import React from 'react'

function Thumb ( { resource1, resource2  } ) {
  return (
    <div>Thumb is for { resource1 } and { resource2 }</div>
  )
}

function TitleThumb () {
    return (
        <div>TitleThumb</div>
    )
}

export { Thumb, TitleThumb };