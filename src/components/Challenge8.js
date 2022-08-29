//Using of src attribute in this way means, your image will be loaded from the absolute path "///images/resto.png" for your site. Images directory should be located at the root of your site. 

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