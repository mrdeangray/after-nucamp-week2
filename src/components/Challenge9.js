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
    console.log(groupedPlayers)
    console.log(Object.keys(groupedPlayers))
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
    <div className='challenge9'>
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