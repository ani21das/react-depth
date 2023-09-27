import React from 'react';

function List ( { layout, items } ) {
  
  let listItems;

  if ( layout === 'numbered' )
  {
    listItems = items.map( ( item, index ) => (
      <li key={ index }>{ index + 1 }. { item }</li>
    ) );
  } else if ( layout === 'alpha' )
  {
    listItems = items.map( ( item, index ) => (
      <li key={ index }>{ String.fromCharCode( 65 + index ) }. { item }</li>
    ) );
  } else if ( layout === 'bullet' )
  {
    listItems = items.map( ( item, index ) => (
      <li key={ index }>• { item }</li>
    ) );
  } else if ( layout === 'alpha-small' )
  {
    listItems = items.map( ( item, index ) => (
      <li key={ index }>{ String.fromCharCode( 97 + index ) }. { item } </li>
    ));
  } 
  else
  {
    return <div>Invalid layout</div>
  }
  return (
    <div>
      {listItems}
    </div>
  );
}

export default List;
