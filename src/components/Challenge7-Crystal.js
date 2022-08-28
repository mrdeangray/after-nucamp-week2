
//Challenge7:
//Create a Challenge7 component in the components directory.
//The component should retrieve and display the names from the players.js file in the data directory.
//The component should also display buttons with the initials of the names.
//Clicking each button will remove the names with that initial.
//The component should also have a "Start Over" button that lists all the names again.
//Add CSS rules to the buttons, so they change color while being hovered over.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useEffect, useState, useCallback } from "react"
import players from "../data/players"

const Challenge7 = () => {
    const [buttonsArray, setButtonsArray] = useState([])
    const [buttons, setButtons] = useState(<div></div>)
    const [playersNames, setPlayersNames] = useState(players.map(player => player.name))
    
    const filterNames = useCallback((btn) => {
        const filteredNames = playersNames.filter(name => name[0] !== btn)
        setPlayersNames(filteredNames)
    },[playersNames])

    const loadButtons = useCallback(() => {
        setButtonsArray(playersNames.reduce((acc, curr) => {
            // console.log(curr[0])
            if (!acc.includes(curr[0])) {
                acc.push(curr[0])
            }
            return acc;
        }, []))
        setButtons(<div>
            {buttonsArray.map((btn) => (
                <button key={btn} onClick={() => filterNames(btn)}>{btn}</button>
            ))}
        </div>)
    },[buttonsArray, filterNames, playersNames])

    const resetPlayersNames = () => {
        setPlayersNames(players.map(player => player.name))
        loadButtons();
    }

    useEffect(() => {
        loadButtons();
    }, [loadButtons, playersNames])
    return (
        <div className="challenge7">
            {buttons}
            <ul>
                {playersNames.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
            <button onClick={resetPlayersNames}>StartOver</button>
        </div>
    )
}

export default Challenge7