
//Challenge2: 
//Create a Challenge2 component in the components directory.
//the component should retrieve and display the names from the players.js file in the data directory.
//the names should be grouped by the first letter in the name.
//the component should use: useEffect, useState, array.reduce(), and array.map().
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import players from '../data/players'
import { useEffect, useState } from 'react';

const Challenge2 = () => {
    useEffect(() => {
        getNames()
    }, [])


    const [names, setNames] = useState([])
    // const [arr, setArr] = useState([['adam', 'alex', 'aaron'], ['brett', 'bryan', 'brad'], ['charles', 'carson', 'carrie']])

    const getNames = () => {
        const playerNames = players.reduce((acc, curr) => {
            return [...acc, curr.name]
        }, [])
        setNames(playerNames)
    }
    const handleAlphabetize = () => {
        const playerNames = players.reduce((acc, curr) => {
            acc[curr.name[0]] ??= []
            acc[curr.name[0]].push(curr.name)
            return acc
        }, {})




        console.log(handleAlphabetize)
        setNames(<div>
            <ul>
                {
                    Object.values(playerNames).map((elem, idx) => {
                        return (
                            <li key={idx}>{elem[0].toString().toUpperCase()[0]}:   {elem.toString().replaceAll(',', ', ')}</li>
                        )
                    })
                }
            </ul>
        </div>
        )


    }


    return (
        <div className='challenge1'>
            <h2>Challenge2</h2>
            <br />
            <h6>Names of players:  </h6>
            {names}

            <br />
            <button onClick={handleAlphabetize}>Group (Alphabetize)</button>

        </div>
    )
}

export default Challenge2