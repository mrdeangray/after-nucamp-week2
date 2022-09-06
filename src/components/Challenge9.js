//Challenge9:
//Create a Challenge9 component in the components directory.
//The component should display a column for each team and the players that belong to that team.
//Clicking each image will remove the player from the team's column
//If all the players are removed from the team, that column will be removed.
//Add CSS rules for the hover state of the players in the active column.
//add a CSS rule to the App.css file so the component's body is indented.
//Add a route/link for this component to the Header component.

import { useCallback, useEffect, useState } from "react"
import players from "../data/players";

const Challenge9 = () => {
    const [playersByTeam, setPlayersByTeam] = useState({});

    const sortPlayers = useCallback(()=>{
        const sortedPlayers=players.reduce((acc, cur)=>{
            if(acc[cur.team]){
                acc[cur.team].push(cur);
            }
            else{
                acc[cur.team]=[cur];
            }
            return acc;
        },{})
        setPlayersByTeam({...sortedPlayers})
    },[])

    useEffect(()=>{
        sortPlayers();
    },[sortPlayers])

    const removePlayer =(playerToRemove)=>{
        playersByTeam[playerToRemove.team]=playersByTeam[playerToRemove.team].filter((player)=>player.id !== playerToRemove.id)
        if(playersByTeam[playerToRemove.team].length===0){
            delete playersByTeam[playerToRemove.team];
        }
        setPlayersByTeam({...playersByTeam})
            
    }

  return (
    <div className="challenge9">
      {Object.keys(playersByTeam).map((team, index)=>(
        
        <div className='teams-box' key={index}>
            <h4>Team: {team}</h4>
            {playersByTeam[team].map(player=>(
                <div 
                 className="player-box" 
                 key={player.id} 
                 style={{backgroundColor: team.toLowerCase()}}
                 onClick={()=>removePlayer(player)}
                >
                    <p >{player.name}</p>
                    <img  
                            className='player-img' 
                            src={`/img-players/${player.image}`} 
                            alt={player.name}
                        />
                </div>
            ))}
        </div>
      ))}
    </div>
  )
}

export default Challenge9
