
//Challenge9:
//Create a Challenge9 component in the components directory.
//The component should display a column for each team and the players that belong to that team.
//Clicking each image will remove the player from the team's column
//If all the players are removed from the team, that column will be removed.
//Add CSS rules for the hover state of the players in the active column.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useState, useCallback, useEffect } from 'react'
import playersData from '../data/players'

const Challenge9 = () => {
    const [displayTeams, setDisplayTeams] = useState([])
    const [players, setPlayers] = useState([...playersData])



    const removePlayer = useCallback((id) => {
        console.log(id)
        setPlayers(players.filter(player => player.id !== id))
    }, [players])

    const startOver = () => {
        setPlayers([...playersData])
    }
    const getTeams = useCallback(() => {
        const groupedPlayers = players.reduce((acc, curr) => {
            acc[curr.team] ??= []
            acc[curr.team].push(curr)
            return acc
        }, {})
        // console.log(groupedPlayers)
        //console.log(Object.keys(groupedPlayers))
        setDisplayTeams(
            <div className='container'>
                {
                    Object.keys(groupedPlayers).sort().map((team, idx) => (
                        <div key={idx} className='team'>
                            <h4>Team: {team}</h4>
                            {
                                groupedPlayers[team].map((player, idx) => (
                                    <li onClick={() => removePlayer(player.id)} className="player" key={idx} style={{ backgroundColor: team.toLowerCase() }}>{player.name}
                                        <img className="player-image" src={`/img-players/${player.image}`} alt="" />
                                    </li>
                                ))
                            }

                        </div>
                    ))
                }
            </div>

        )

    }, [players, removePlayer])

    useEffect(() => {
        getTeams()
    }, [getTeams, players])


    return (
        <div className='challenge9-dean'>
            <div style={{ display: "inline-block" }}>
                <h2>Challenge9</h2><button onClick={startOver}>Start Over</button>
            </div>
            <div className='container'>
                {displayTeams}
            </div>

        </div >
    )
}

export default Challenge9