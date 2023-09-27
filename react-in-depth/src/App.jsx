import React from 'react'
import List from './components/List';


const items=['item1','item2']

function App () {
  return (
    <>
      <h1>Numbered List</h1>
      <List layout="numbered" items={ items } />
      <h1>Alpha List</h1>
      <List layout="alpha" items={ items } />
      <h1>Bullet List</h1>
      <List layout="bullet" items={ items } /> 
      <h1>Aplha-small list</h1>
      <List layout="alpha-small" items={items} />
    </> 
  )
}

export default App