
//Challenge8:
//Create a Challenge8 component in the components directory.
//The component should retrieve and display the names and images from the players.js file in the data directory.
//The component should have two columns: Active and Inactive
//Clicking each image in the Active column will move the player to the Inactive column
//Clicking each image in the Inactive column will not do anything(for this challenge)
//Both active and inactive columns should keep a count of their players.
//Add CSS rules for the hover state of the players in the active column.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.


import { useState, useCallback, useEffect } from 'react'
import playersData from '../data/players'

const Challenge8 = () => {
    const [players, setPlayers] = useState([...playersData])
    const [inactivePlayers, setInactivePlayers] = useState([])
    const [activePlayerCount, setActivePlayerCount] = useState(players.length)
    const [inactivePlayerCount, setInactivePlayerCount] = useState(inactivePlayers.length)
    const [displayInactive, SetDisplayInactive] = useState(<div>No inactive players</div>)

    useEffect(() => {
        setActivePlayerCount(players.length)
        setInactivePlayerCount(inactivePlayers.length)
        SetDisplayInactive(

            inactivePlayers.map((player, idx) => (
                <li className='#'
                    key={idx}

                >
                    {player.name}
                    <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                </li>
            ))

        )
    }, [inactivePlayers, players])


    const handleClick = (id) => {
        //console.log(evt)
        console.log(id)
        setPlayers(
            players.filter((player) => player.id !== id)
        )
        console.log(inactivePlayers)
        const inactive = players.filter((player) => player.id === id)
        setInactivePlayers([...inactivePlayers, ...inactive])

    }



    return (


        <div className='challenge8'>
            <h2>Challenge8</h2>
            <div className='grid-container'>

                <div className='active'>
                    <h4>Active Players {activePlayerCount}</h4>
                    {
                        players.map((player) => (
                            <li className='challenge8-player'
                                key={player.id}
                                onClick={() => handleClick(player.id)}
                            >
                                {player.name}
                                <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                            </li>
                        ))
                    }
                </div>
                <div className='inactive'>
                    <h4>Inactive Players: {inactivePlayerCount}</h4>
                    {displayInactive}

                </div>
            </div>
        </div>
    )
}

export default Challenge8