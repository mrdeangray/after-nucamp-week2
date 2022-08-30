
//Challenge8:
//Create a Challenge8 component in the components directory.
//The component should retrieve and display the names and images from the players.js file in the data directory.
//The component should have two columns: Active and Inactive
//Clicking each image in the Active column will move the player to the Inactive column
//Clicking each image in the Inactive column will move the player back to the Active column
//Both active and inactive columns should keep a count of their players.
//Add CSS rules for the hover state of the players in the active column.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.


import { useState, useCallback, useEffect } from 'react'
import playersData from '../data/players'

const Challenge8 = () => {
    const [activePlayers, setActivePlayers] = useState([...playersData])
    const [inactivePlayers, setInactivePlayers] = useState([])
    const [displayInactive, setDisplayInactive] = useState(<div>No inactive players</div>)

    const moveToInactive = (id) => {
        setActivePlayers(activePlayers.filter((player) => player.id !== id))
        const inactive = activePlayers.filter((player) => player.id === id)
        setInactivePlayers([...inactivePlayers, ...inactive])
    }

    const moveToActive = useCallback((id) => {
        setInactivePlayers(inactivePlayers.filter((player) => player.id !== id))
        const active = inactivePlayers.filter((player) => player.id === id)
        setActivePlayers([...active, ...activePlayers])
    }, [activePlayers, inactivePlayers])

    useEffect(() => {
        setDisplayInactive(
            inactivePlayers.map((player, idx) => (
                <li className='inactive-player'
                    key={idx}
                    onClick={() => moveToActive(player.id)}
                >
                    {player.name}
                    <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                </li>
            ))
        )
    }, [inactivePlayers, activePlayers, moveToActive])




    return (
        <div className='challenge8'>
            <h2>Challenge8</h2>
            <div className='grid-container'>
                <div className='active'>
                    <h4>Active Players {activePlayers.length}</h4>
                    {
                        activePlayers.map((player) => (
                            <li className='active-player'
                                key={player.id}
                                onClick={() => moveToInactive(player.id)}
                            >
                                {player.name}
                                <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                            </li>
                        ))
                    }
                </div>
                <div className='inactive'>
                    <h4>Inactive Players: {inactivePlayers.length}</h4>
                    {displayInactive}
                </div>
            </div>
        </div>
    )
}

export default Challenge8