//Challenge1: 
//Create a Challenge1 component in the components directory.
//the component should retrieve and display only the names from the players.js file in the data directory.
//the component should use: useEffect, useState, and array.reduce().
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import players from '../data/players'
import { useEffect, useState } from 'react';

const Challenge1 = () => {
  useEffect(() => {
    getNames()
  }, [])


  const [names, setNames] = useState([])

  const getNames = () => {
    const playerNames = players.reduce((acc, curr) => {
      return [...acc, curr.name]
    }, [])
    setNames(playerNames)
  }



  const handleSort = () => {
    setNames(names.sort().toString().replaceAll(",", ", "))
  }

  return (
    <div className='challenge1'>
      <h2>Challenge1</h2>
      <br />
      <h6>Name of players:  </h6>

      <div>{names}</div>

      <br /><br />
      <button onClick={handleSort}>Sort (ascending)</button>

    </div>
  )
}

export default Challenge1