
//Challenge7:
//Create a Challenge7 component in the components directory.
//The component should retrieve and display the names from the players.js file in the data directory.
//The component should also display buttons with the initials of the names.
//Clicking each button will remove the names with that initial.
//The component should also have a "Start Over" button that lists all the names again.
//Add CSS rules to the buttons, so they change color while being hovered over.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.


import { useEffect, useState } from 'react'
import players from '../data/players'



const Challenge7 = () => {
    const [list, setList] = useState([...players])
    const [playerInitials, setPlayerInitials] = useState([])
    const [display, setDisplay] = useState(<div></div>)

    useEffect(() => {
        setDisplay(
            <ul>
                {
                    list.sort().map((player, idx) => (
                        <li key={idx}>{player.name}</li>
                    ))
                }
            </ul>
        )
        getPlayerInitials()
    }, [list])


    const getPlayerInitials = () => {
        const initials = list.reduce((acc, curr) => {
            if (acc.indexOf(curr.name[0]) === -1) {
                acc.push(curr.name[0])
            }

            return acc
        }, [])
        setPlayerInitials(
            <ul>
                {
                    initials.map((initial, idx) => (
                        <button className='challenge7-buttons' onClick={() => removeNamesByInitial(initial)} key={idx}>{initial}</button>
                    ))
                }
            </ul>
        )
    }

    const removeNamesByInitial = (char) => {
        setList(list.filter(player => player.name[0] !== char))

    }

    const handleStartOver = () => {
        setList([...players]
        )
    }
    return (
        <div className='challenge7'>
            <h2>Challenge7</h2>
            {playerInitials}
            {display}

            <button className='challenge7-buttons' onClick={() => handleStartOver()}>Start Over</button>
        </div>
    )
}

export default Challenge7